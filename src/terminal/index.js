#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Path helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load config
const configPath = path.resolve(__dirname, '../../config/terminal.json');
const raw = fs.readFileSync(configPath, 'utf-8');
const terminalConfig = JSON.parse(raw);

// Render terminal window
console.log(`=== ${terminalConfig.window.title} ===\n`);

// Prompt loop (mock)
const readline = await import('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const commands = terminalConfig.commands;

function findResponse(input) {
  const match = commands.find(c => c.prompt === input);
  return match ? match.response : "Command not recognized.";
}

function prompt() {
  rl.question("> ", answer => {
    console.log(findResponse(answer));
    prompt();
  });
}

prompt();
