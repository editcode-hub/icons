import fs from "fs";
import path from "path";

const iconDir = path.resolve(__dirname, "./src/icons");
const indexPath = path.join(iconDir, "index.ts");

const files = fs.readdirSync(iconDir);
const components = files
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => {
    const name = file.replace(".tsx", "");
    return `export * from './${name}';`;
  });

// Записываем содержимое в index.ts
const indexContent = components.join("\n");
fs.writeFileSync(indexPath, indexContent);
