import { findTerminalConfigs } from "../utils/findTerminalConfig.js"; 
import fs from 'fs';
import path from 'path';

// Find config files and parse
// Find config files and parse
const configs = findTerminalConfigs(process.cwd());
let parsedConfig = {};

if (configs.length > 0) {
  const configPath = configs[0];
  const fileContent = fs.readFileSync(configPath, 'utf-8');
  parsedConfig = JSON.parse(fileContent);
}

// ✅ Move this section *after* parsedConfig is loaded
const inputConfig = parsedConfig.input || {};
const prefix = inputConfig.prefix || '>';
const unknownMessage = inputConfig.unknownCommandMessage || 'Command not found.';
const placeholder = inputConfig.placeholder || '';


// Theming and html generation
const theme = parsedConfig.window?.theme || 'green';
const themeStyles = {
  green: { backgroundColor: "#000000", color: "#00FF00" },
  blue: { backgroundColor: "#001F3F", color: "#7FDBFF" }
};
const selectedTheme = themeStyles[theme] || themeStyles.green;

const html = `
  <div style="background-color: ${selectedTheme.backgroundColor}; color: ${selectedTheme.color}; padding: 10px; font-family: monospace;">
    <h1>${parsedConfig.window?.title || "Untitled Terminal"}</h1>
    <div class="terminal-body" id="terminal-body">
      <div>${prefix} Welcome to Terminal Builder!</div>
    </div>
    <div>
      <span id="input-prefix">${prefix}</span>
      <input type="text" id="terminal-input" placeholder="${placeholder}" autofocus />
    </div>
    <script>
      const commands = ${JSON.stringify(parsedConfig.commands)};
      const input = document.getElementById('terminal-input');
      const body = document.getElementById('terminal-body');

      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          const userInput = input.value;
          const match = commands.find(c => c.prompt === userInput);
          const response = match ? match.response : "${unknownMessage}";
          const out = document.createElement('div');
          out.innerHTML = '${prefix} ' + userInput + '<br>' + response;
          body.appendChild(out);
          input.value = '';
          body.scrollTop = body.scrollHeight;
        }
      });
    </script>
  </div>
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
