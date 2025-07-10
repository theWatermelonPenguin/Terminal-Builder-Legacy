import { findTerminalConfigs } from "../utils/findTerminalConfig.js"; 
import fs from 'fs';

// Find config files and parse
const configs = findTerminalConfigs(process.cwd());
let parsedConfig = {};

if (configs.length > 0) {
  const configPath = configs[0];
  const fileContent = fs.readFileSync(configPath, 'utf-8');
  parsedConfig = JSON.parse(fileContent);
}

const inputConfig = parsedConfig.input || {};
const prefix = inputConfig.prefix || '>';
const unknownMessage = inputConfig.unknownCommandMessage || 'Command not found.';
const placeholder = inputConfig.placeholder || '';

const theme = parsedConfig.window?.theme || 'green';
const themeStyles = {
  green: { backgroundColor: "#000000", color: "#00FF00" },
  blue: { backgroundColor: "#001F3F", color: "#7FDBFF" }
};
const selectedTheme = themeStyles[theme] || themeStyles.green;

export {prefix, unknownMessage, placeholder, selectedTheme};
export function getParsedConfig() {
  return parsedConfig;
}