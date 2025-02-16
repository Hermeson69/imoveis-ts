# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## GUIA DE INSTALAÇÃO DO REACT COM O VITE

Para a instalação do Vite, primeiro crie uma pasta na sua área de trabalho. Em seguida, abra o terminal e navegue até a pasta criada usando o comando `cd` seguido do caminho da pasta. 

**OBS.:** Esse caminho pode ser obtido no explorador de arquivos.

### 1. Instale o Vite e o React

Primeiro, acesse o site [Vite Guide](https://vite.dev/guide/).

**OBS.:** Para o React funcionar, é necessário ter o Node.js instalado na sua máquina.

#### 1.1. Instalação do Vite

No terminal, execute o seguinte comando:

```sh
npm create vite@latest Nome-do-seu-projeto -- --template react
```

Esse processo pode demorar um pouco. Após a conclusão, digite no terminal:

```sh
code .
```

**OBS.:** Certifique-se de estar na mesma pasta do projeto.

### 2. Finalização da Instalação no VSCode

Como você já criou uma pasta e dentro dela está o seu projeto, abra o terminal no VSCode com `Ctrl + Shift + '` e execute os seguintes comandos:

```sh
cd 'nome_da_pasta_do_projeto'
npm install
npm intall styled-components ou '(yarn add styled-components caso o esteja útilizando)'
npm run dev
```
### 3. Comandos Úteis
Esse comando vai ver se todos os seus Package´s estão nas versões mais recentes:
```sh
npm outdated
```
Caso não estejam só rodar um:
```sh
npm update
```
Dessa forma, atualizando todos de uma vez.

### 4. Styled-Components

Estrutura do projeto:

```
Projeto
├── node_modules
├── public
└── src
    ├── assets
    └── Global (Criação do seu arquivo global usando styled-components)
        └── GlobalStyle.ts
    ├── App.jsx
    └── Main.jsx
```

Dentro da pasta `Global` haverá apenas um arquivo com os estilos globais da sua aplicação:

```ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
    }
    :root {
        /* --primary: #ffff;
        --secundary: #15181c;
        --gray: #7a7a7a;
        --blue: #1da1f2;
        --white: #fff;
        --black: #0000; */
    }
`;
```