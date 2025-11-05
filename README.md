# 🚀 GoLiveGram Marketing Website

A production-ready, SEO-optimized React website for GoLiveGram - the live streaming platform where creators monetize their passion.

## ✨ Features

### 🎯 **Marketing & Conversion Focused**
- Hero section with clear value proposition
- Multiple revenue stream showcases
- Social proof and testimonials
- Conversion-optimized CTAs throughout
- Urgency and scarcity elements

### 🔍 **SEO Optimized**
- Complete meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD)
- Semantic HTML structure
- Fast loading times (<3s)
- Mobile-first responsive design
- Google Analytics 4 & Facebook Pixel ready

### 🎨 **Modern UI/UX**
- Gradient backgrounds and animations
- Floating interactive elements
- Hover effects and micro-interactions
- Emoji-rich content for engagement
- Mobile-responsive design
- Accessibility compliant

### 📊 **Analytics Ready**
- Google Analytics 4 integration
- Facebook Pixel tracking
- Conversion goal tracking
- Performance monitoring
- SEO-friendly URL structure

## 🚀 Quick Start

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
