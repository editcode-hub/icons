import { terser } from "rollup-plugin-terser";
import configList from "./rollup.config.js";

process.env.NODE_ENV = "production";

const updatedConfig = configList.map((config) => {
  config.output.sourcemap = false;

  const isTypesBuild = config.input.endsWith(".d.ts");

  // Добавляем terser только если это НЕ типы
  if (!isTypesBuild) {
    config.plugins = [...config.plugins, terser()];
  }

  return config;
});

export default updatedConfig;
