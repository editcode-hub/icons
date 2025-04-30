import path from "path";
import { fileURLToPath } from "url";
import { babel } from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import copy from "rollup-plugin-copy";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const resolveFile = (filePath) => path.join(__dirname, "..", filePath);

const babelOptions = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  babelHelpers: "bundled",
};

export default [
  // Задача для JavaScript файлов
  {
    input: resolveFile("src/icons/index.ts"),
    output: [{ file: "dist/index.js", format: "esm" }],
    external: ["react"],
    plugins: [
      copy({
        targets: [
          { src: resolveFile("public/**/*"), dest: resolveFile("docs") },
        ],
      }),
      postcss(),
      nodeResolve({
        extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
      }),
      commonjs({
        exclude: "src/**",
      }),
      babel({
        ...babelOptions,
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        include: ["src/**/*"],
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
      }),
      json(),
      terser(), // Минификация только для JavaScript файлов
    ],
  },
  {
    input: resolveFile("src/icons.d.ts"),
    output: { file: "dist/icons.d.ts", format: "esm" },
    plugins: [dts()],
  },
];
