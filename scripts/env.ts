import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const requiredEnvVars = [
  "ICONS_FILE_KEY",
  "ICONS_FOLDER",
  "ICONS_FRAMES_IDS",
  "PERSONAL_ACCESS_TOKEN",
  "TEMP_ICONS_FOLDER",
];

console.log("ICONS_FILE_KEY:", process.env.ICONS_FILE_KEY);
console.log("PERSONAL_ACCESS_TOKEN:", process.env.PERSONAL_ACCESS_TOKEN);
console.log("TEMP_ICONS_FOLDER:", process.env.TEMP_ICONS_FOLDER);

for (const varName of requiredEnvVars) {
  if (!process.env[varName]) {
    throw new Error(`⛔️ Missing required environment variable: ${varName}`);
  }
}

export const iconsFileKey = process.env.ICONS_FILE_KEY!;
export const iconsFolder = process.env.ICONS_FOLDER!;
export const iconsFramesIds = (process.env.ICONS_FRAMES_IDS || "").split(",");
export const personalAccessToken = process.env.PERSONAL_ACCESS_TOKEN!;
export const tempIconsFolder = process.env.TEMP_ICONS_FOLDER!;
