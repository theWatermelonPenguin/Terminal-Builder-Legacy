# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
## [0.4.0] - 2025-07-8
### Added
- `input` block in `terminal.json`
    -`prefix`: Customize the terminal input prompt (e.g., >, $, ~).

    - `placeholder`: Set placeholder text in the input field (for HTML/Electron).

    - `unknownCommandMessage`: Define a custom response for unknown commands.

### Changed
- How themes load into the electron window
- How the files are dispatched

### Removed
- 1 dispatcher for all terminal related content
---

## [0.3.0] - 2025-07-4
### Added
- UI parser that reads `terminal.json` and converts window configuration into HTML
- `ui_cache` directory to store generated UI files
- Theme-based styling support (e.g., green, blue)
- HTML template output based on terminal configuration
- New `build-ui` script for generating the UI

### Changed
- Refactored configuration handling for cleaner separation between logic and output

### Removed

---

## [0.2.4] - 2025-07-3
### Addded
- Github actions.
### Changed

### Removed

---

## [0.2.3] - 2025-07-1
### Addded
- .github folder with templates.
### Changed
- Location of Code of Conduct file.
### Removed

## [0.2.2]
### Addded
- Code of Conduct.
### Changed

### Removed

---

## [0.2.1] - 2025-07-1
### Addded
- Roadmap.
### Changed

### Removed

---

## [0.2.0] - 2025-06-30
### Added
- New `Electron`-based window system (`renderWindow`) for UI-based terminal display.
- `terminal.json` config loading for flexible prompt/theme configuration.
- Organized structure with `components/`, `ui/`, and `renderers/` folders.
- Groundwork for **Terminalization** integration and compliance assessments.

### Changed
- Launcher now initializes both CLI prompt and window renderer.
- File system refactored to support modular terminal components.

### Removed
- Hardcoded 'terminal.json' search.

---

## [0.1.0] - 2025-06-28
### Added
- Initial terminal command system with prompt handler.
- Support for basic command-response via `terminal.json`.
- Terminal output via 'console.log'

