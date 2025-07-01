# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-06-30
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

## [1.0.0] - 2025-06-28
### Added
- Initial terminal command system with prompt handler.
- Support for basic command-response via `terminal.json`.
- Terminal output via 'console.log'

