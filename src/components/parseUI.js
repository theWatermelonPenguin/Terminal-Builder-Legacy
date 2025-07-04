import { findTerminalConfigs } from "../utils/findTerminalConfig.js"; 
import fs from 'fs';
import path from 'path';

// Find config files and parse
const configs = findTerminalConfigs(process.cwd());
let parsedConfig = {};

if (configs.length > 0) {
  const configPath = configs[0];
  const fileContent = fs.readFileSync(configPath, 'utf-8');
  parsedConfig = JSON.parse(fileContent);
}

// Theming and html generation
const theme = parsedConfig.window?.theme || 'green';
const themeStyles = {
  green: { backgroundColor: "#000000", color: "#00FF00" },
  blue: { backgroundColor: "#001F3F", color: "#7FDBFF" }
};
const selectedTheme = themeStyles[theme] || themeStyles.green;

const html = `
  <html>
    <head>
      <style>
        body {
          background-color: ${selectedTheme.backgroundColor};
          color: ${selectedTheme.color};
          font-family: monospace, monospace;
          margin: 0; padding: 20px;
        }
      </style>
    </head>
    <body>
      <h1>${parsedConfig.window?.title || "Untitled Terminal"}</h1>
      <div class="terminal-body">...</div>
    </body>
  </html>
`;

// Ensure ui_cache exists
const uiCacheDir = path.join(process.cwd(), 'src', 'ui', 'cache');
if (!fs.existsSync(uiCacheDir)) {
  fs.mkdirSync(uiCacheDir);
}

// Write to terminal_ui.html
const outputFile = path.join(uiCacheDir, 'terminal_ui.html');
fs.writeFileSync(outputFile, html, 'utf-8');

console.log(`HTML written to ${outputFile}`);
