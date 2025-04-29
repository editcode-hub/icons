import fs from "fs-extra";
import axios from "axios";
import Listr from "listr";
import { FigmaApi } from ".";
import type { ComponentMetadata } from ".";

import {
  iconsFileKey,
  iconsFolder,
  iconsFramesIds,
  personalAccessToken,
  tempIconsFolder,
} from ".";

const figmaApi = new FigmaApi({ personalAccessToken });

interface TaskContext {
  components?: Record<string, ComponentMetadata>;
  images?: Record<string, string>;
  sources?: Array<{ fileName: string; source: string }>;
}

const tasks = new Listr<TaskContext>([
  {
    title: "Запрос информации об иконках",
    task: async (ctx) => {
      const { components } = await figmaApi.getFile({
        fileKey: iconsFileKey,
        ids: iconsFramesIds,
        depth: 3,
      });
      ctx.components = components;
    },
  },
  {
    title: "Запрос изображений иконок в формате svg",
    task: async (ctx) => {
      const { components } = ctx;
      if (components) {
        const { images } = await figmaApi.getImage({
          fileKey: iconsFileKey,
          ids: Object.keys(components),
          format: "svg",
        });
        ctx.images = images;
      }
    },
  },
  {
    title: "Загрузка svg-исходников иконок",
    task: async (ctx) => {
      const { components, images } = ctx;
      if (components && images) {
        const sources = await Promise.all(
          Object.keys(images).map((id) => {
            const fileName = components[id]?.name;
            const imageUrl = images[id];
            if (!fileName || !imageUrl) {
              return null;
            }

            return axios
              .get(imageUrl)
              .then((res) => ({
                fileName: fileName,
                source: res.data as string,
              }))
              .catch((error) => {
                console.warn(
                  `⚠️ Ошибка при скачивании иконки ${fileName}:`,
                  error.message,
                );
                return null;
              });
          }),
        );
        ctx.sources = sources.filter((source) => source !== null) as {
          fileName: string;
          source: string;
        }[];
      }
    },
  },
  {
    title: "Сохранение иконок во временной папке",
    task: async (ctx) => {
      // Сохранение загруженных иконок
      const { sources } = ctx;
      if (sources) {
        await Promise.all(
          sources.map(({ fileName, source }) =>
            fs.outputFile(`${tempIconsFolder}/${fileName}.svg`, source),
          ),
        );
      }
    },
  },
  {
    title: "Замена основной папки с иконками временной папкой",
    task: async () => {
      const exists = await fs.pathExists(tempIconsFolder);
      if (!exists) {
        throw new Error(`Временная папка '${tempIconsFolder}' не найдена.`);
      }
      await fs.move(tempIconsFolder, iconsFolder, { overwrite: true });
    },
  },
]);

tasks.run().catch(async (error) => {
  console.error(error);
  const exists = await fs.pathExists(tempIconsFolder);
  if (exists) {
    await fs.remove(tempIconsFolder);
  }
});
