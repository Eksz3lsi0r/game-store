# 🛍️ Alanotronix - Premium Online Shop

**Ein moderner E-Commerce Shop mit Netflix/Disney+ Style Animationen**

Alanotronix ist ein hochmoderner Online-Shop, der das beste aus verschiedenen E-Commerce-Welten (Amazon, eBay, Etsy) kombiniert und mit beeindruckenden Animationen im Stil von Netflix und Disney+ aufwertet. Das Ergebnis ist ein einzigartiges Shopping-Erlebnis mit Premium-Feeling.

## ✨ Features

### 🎬 Netflix/Disney+ Style Design

- **Cinematic Hero Slider** mit automatischen Übergängen
- **Glassmorphismus UI** mit Backdrop-Blur-Effekten
- **Smooth Animations** mit Framer Motion
- **Micro-Interactions** für jede Benutzeraktion

### 🛒 Premium Shopping Experience

- **Mega-Menu Navigation** mit animierten Kategorien
- **Product Cards** mit Hover-Effekten und Quick-View
- **Smart Search** mit Live-Vorschlägen
- **Wishlist & Cart** mit Badge-Notifications
- **8+ Hauptkategorien** mit 50+ Unterkategorien

### 🎨 Modern Tech Stack

- **React 18** mit TypeScript
- **Chakra UI** für konsistente Komponenten
- **Framer Motion** für perfekte Animationen
- **Vite** für blitzschnelle Entwicklung
- **Responsive Design** für alle Geräte

## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone <repository-url>
cd alanotronix-shop

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Development server
npm run dev              # → http://localhost:3100

# Build for production
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

## 🛍️ Shop Features

### Kategorien

1. **📱 Elektronik** - Smartphones, Laptops, Gaming
2. **👕 Mode & Style** - Kleidung, Schuhe, Accessoires
3. **🏠 Haus & Garten** - Möbel, Deko, Küche
4. **⚽ Sport & Freizeit** - Fitness, Outdoor, Reisen
5. **💄 Beauty & Gesundheit** - Kosmetik, Pflege, Wellness
6. **📚 Bücher & Medien** - Bücher, Filme, Musik
7. **🧸 Spielwaren** - Für alle Altersgruppen
8. **🚗 Auto & Motorrad** - Zubehör, Ersatzteile

---

**Alanotronix** - _Where Shopping Meets Cinematic Experience_ 🎬✨

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
