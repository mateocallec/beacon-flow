<div align="center">
    <a href="https://github.com/mateocallec/beacon-flow"><img src="./assets/icons/2048x2048.png?raw=true" alt="beacon-flow" height="217" /></a>
</div>

<div>&nbsp;</div>

<div align="center">
    <a href="https://github.com/mateocallec/beacon-flow/releases"><img src="https://img.shields.io/github/v/release/mateocallec/beacon-flow?label=lastest%20release&color=blue" alt="Latest release" /></a>
    <a href="https://github.com/mateocallec/beacon-flow/blob/main/LICENSE"><img src="https://img.shields.io/github/license/mateocallec/beacon-flow?label=license&color=white" alt="License" /></a>
    <a href="https://github.com/mateocallec/beacon-flow/releases"><img src="https://img.shields.io/badge/platform-Cross--Platform-darkred?logo=electron&logoColor=white" alt="Supported platforms" /></a>
</div>

<hr />

**Beacon Flow** is an Electron-based desktop application designed to help developers communicate easily with APIs.  
It provides a clean and intuitive interface to send HTTP requests, manage parameters, and inspect responses — all from a single tool.

---

## 🚀 Features

- **API Communication Made Simple** — Easily test and interact with REST APIs.  
- **Custom URL Input** — Enter any API endpoint you want to query.  
- **HTTP Methods Supported** — Send **GET**, **POST**, **PUT**, and **DELETE** requests.  
- **Custom Parameters** — Add, edit, and manage multiple request parameters.  
- **Response Inspector** — View and analyze responses in detail.  
- **Cross-platform** — Built on **Electron**, combining the power of **Chromium** and **Node.js**.

---

## 🧩 Project Structure

```

Beacon Flow/
├── assets/                # Images, icons, and static resources
├── dist/                  # Compiled build output
├── node_modules/          # Installed dependencies
├── scripts/               # Helper scripts
│   ├── build.sh           # Build script for packaging the app
│   ├── setup.sh           # Setup script for environment configuration
│   └── start.sh           # Launch script for starting the app
├── src/                   # Main source code (Electron, renderer, etc.)
│
├── CHANGELOG.md           # Version history and changes
├── CODE_OF_CONDUCT.md     # Contributor behavior guidelines
├── CONTRIBUTING.md        # Instructions for contributors
├── eslint.config.mjs      # ESLint configuration file
├── LICENSE                # MIT License file
├── package.json           # Project configuration and dependencies
├── package-lock.json      # Dependency lock file
├── README.md              # Project documentation (this file)
├── ROADMAP.md             # Planned features and development roadmap
└── SECURITY.md            # Security policy and reporting process

````

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm**
- **Git**

### Installation

```bash
git clone https://github.com/<your-username>/beacon-flow.git
cd beacon-flow
npm install
````

### Running in Development

```bash
bash scripts/start.sh
```

Or use the helper script:

```bash
bash scripts/setup.sh
```

### Building for Production

```bash
bash scripts/build.sh
```

Your packaged app will be available in the `dist/` folder.

---

## 🧠 Technologies Used

* **[Electron](https://www.electronjs.org/)** — for cross-platform desktop app development
* **[Axios](https://axios-http.com/)** (`axios.min.js`) — for handling HTTP requests
* **[The New CSS Reset](https://github.com/elad2412/the-new-css-reset)** — to normalize browser styles
* **Chromium** — for rendering the user interface

---

## 🔒 Security & Policies

Please refer to the following documents for contribution and security standards:

* [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)
* [`CONTRIBUTING.md`](./CONTRIBUTING.md)
* [`SECURITY.md`](./SECURITY.md)
* [`ROADMAP.md`](./ROADMAP.md)
* [`CHANGELOG.md`](./CHANGELOG.md)

---

## 🧾 License

This project is licensed under the **MIT License**.
See the [`LICENSE`](./LICENSE) file for details.

---

## 👤 Author

**Matéo Florian Callec**
📧 [mateo@callec.net](mailto:mateo@callec.net)
Creator and maintainer of **Beacon Flow**.

---

## 🙏 Credits

Beacon Flow is made possible thanks to these amazing open-source projects:

* [Axios](https://axios-http.com/) — Simplified HTTP client for browsers and Node.js
* [The New CSS Reset](https://github.com/elad2412/the-new-css-reset) — A modern CSS reset
* [Electron](https://www.electronjs.org/) — Cross-platform desktop app framework
* [Chromium](https://www.chromium.org/) — The open-source browser engine powering Electron
* [Afacad Flux](https://justfreefonts.com/fonts/afacad-flux) — Open-source font family, licensed under [SIL Open Font License 1.1 (OFL)](https://scripts.sil.org/OFL)
  * Files included: `AfacadFlux-Light.ttf`, `AfacadFlux-Medium.ttf`, `AfacadFlux-Regular.ttf`, `AfacadFlux-SemiBold.ttf`
* [Material Symbols](https://fonts.google.com/icons) — Google open-source icon fonts, licensed under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
  * Variants included: `MaterialSymbolsOutlined`, `MaterialSymbolsRounded`, `MaterialSymbolsSharp`
  * Files included: `.ttf`, `.woff2`, and `.codepoints` files

---

> 💡 *Beacon Flow — A clear signal between you and your APIs.*
