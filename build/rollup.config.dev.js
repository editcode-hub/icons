import path from "path";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import configList from "./rollup.config.js";

process.env.NODE_ENV = "development";

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

const PORT = 3000;
const devSite = `http://127.0.0.1:${PORT}`;

console.log(`[dev]: ${devSite}`);

configList.map((config, index) => {
  config.watch = {
    exclude: "node_modules/**", // Исключить node_modules для отслеживания изменений
  };

  config.output.sourcemap = true; // Включить sourcemap для отладки

  if (index === 0) {
    config.plugins = [
      ...config.plugins,
      serve({
        port: PORT,
        contentBase: [resolveFile("./docs")], // Указываем директорию для сервера
        open: true, // Открывать браузер автоматически
      }),
      livereload(), // Включить перезагрузку страницы
    ];
  }

  return config;
});

export default configList;
