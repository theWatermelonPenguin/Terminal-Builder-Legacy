import {getParsedConfig, prefix, unknownMessage, placeholder, selectedTheme} from "./input.js"
import fs from 'fs';
import path from 'path';

const parsedConfig = getParsedConfig();

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
const uiCacheDir = path.join(process.cwd(), 'src', 'ui', 'screen');
if (!fs.existsSync(uiCacheDir)) {
  fs.mkdirSync(uiCacheDir);
}

// Write to terminal_ui.html
const outputFile = path.join(uiCacheDir, 'terminal_ui.html');
fs.writeFileSync(outputFile, html, 'utf-8');

console.log(`HTML written to ${outputFile}`);
