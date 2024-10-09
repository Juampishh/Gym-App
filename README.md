# Proyecto de React + TypeScript + Vite

Este proyecto proporciona una configuración mínima para hacer que React funcione con Vite, incluyendo Hot Module Replacement (HMR) y algunas reglas de ESLint.

## Características

- **React y TypeScript**: Utiliza las últimas versiones de React y TypeScript para un desarrollo moderno y eficiente.
- **Vite**: Un entorno de desarrollo rápido que aprovecha la carga en caliente para una experiencia de desarrollo fluida.
- **ESLint**: Configuración de ESLint para mantener la calidad del código.

## Plugins de Vite

Actualmente, se encuentran disponibles dos plugins oficiales para integrar React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Utiliza [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Utiliza [SWC](https://swc.rs/) para Fast Refresh.

## Expansión de la configuración de ESLint

Si estás desarrollando una aplicación para producción, se recomienda actualizar la configuración para habilitar reglas de linting basadas en tipos:

1. Configura la propiedad `parserOptions` en el nivel superior de la siguiente manera:

    ```javascript
    export default tseslint.config({
      languageOptions: {
        // otras opciones...
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
    });
    ```

2. Cambia `tseslint.configs.recommended` por `tseslint.configs.recommendedTypeChecked` o `tseslint.configs.strictTypeChecked`.
3. Opcionalmente, agrega `...tseslint.configs.stylisticTypeChecked`.
4. Instala [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y actualiza la configuración:

    ```javascript
    // eslint.config.js
    import react from 'eslint-plugin-react';

    export default tseslint.config({
      // Establece la versión de React
      settings: { react: { version: '18.3' } },
      plugins: {
        // Agrega el plugin de React
        react,
      },
      rules: {
        // otras reglas...
        // Habilita las reglas recomendadas
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
      },
    });
    ```

## Comandos
- Para instalar las dependencias, utiliza:
  ```bash
  npm i
