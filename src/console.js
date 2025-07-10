import fs from 'fs';
import { findTerminalConfigs } from "./utils/findTerminalConfig.js";
import { startPrompt } from './components/prompt.js';  // Import your prompt function

// 1. Find terminal.json files in current working directory
const configPaths = findTerminalConfigs(process.cwd());

// 2. Handle case if no config found
if (configPaths.length === 0) {
  console.error("No terminal.json found");
  process.exit(1); // exit the script
}

// 3. Read the first config file's content as text
const configPath = configPaths[0];
const fileContent = fs.readFileSync(configPath, 'utf-8');

// 4. Parse JSON content into JS object
const terminalConfig = JSON.parse(fileContent);

// 5. Output the terminal window title to console
if (terminalConfig.console && terminalConfig.console.title) {
  console.log(`\n*** ${terminalConfig.console?.title} ***\n`);
} else {
  console.log("\n*** Untitled Terminal ***\n");
}

// 6. Start the prompt loop with the commands loaded from config
startPrompt(terminalConfig.commands);
