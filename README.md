# **Note: Terminal Builder version 1.0.0 and above will be maintained in a new repository soon. Please check there for the latest updates.**
# Terminal Builder
An NPM tool used to build terminals in json using "Components".

# Quick Start (Pre-release)
## 1. Clone the repo
```bash
git clone https://github.com/theWatermelonPenguin/Terminal-Builder
```
## 2. Install dependencies
```bash
npm install
```
## 3. Build the terminal
```bash
npm run trmbuild:ui
npm run trmbuild:window
```
## 4. Customize
Tweak the terminal.json file however you’d like. This defines your terminal’s UI and behavior.

# Output Modes
Terminal Builder supports 3 output modes:
Before doing window and web app build commands, do `npm run trmbuild:ui`

| Mode    | Description                                 | Build Command              |
|---------|---------------------------------------------|----------------------------|
| window  | Desktop terminal UI (Electron)              | `npm run trmbuild:window`  |
| web     | Web browser terminal (HTML/CSS/JS)          | `npm run trmbuild:web`     |
| console | Plain terminal interface (node-based)       | `npm run trmbuild:console` |

# terminal.json Structure (Simplified)
Here's a basic structure for your config:
```json
{
  "web": {
    "title": "The system",
    "theme": "blue"
  },
  "input": {
    "prefix": "$",
    "unknownCommandMessage": "Huh? Command not recognized!",
    "placeholder": "Type your command here..."
  },
  "commands": [
    {
      "prompt": "hello",
      "response": "hi there!"
    },
    {
      "prompt": "whoami",
      "response": "you are a guest user"
    },
    {
      "prompt": "whereami",
      "response": "you are here"
    }
  ]
}
```
Each mode (window, web, console) can have its own custom settings.

commands define prompt-response logic.

# Coming Soon
Theme editor

Live preview

Plugin support

> Star the repo if you like the project ⭐
> Contributions welcome
