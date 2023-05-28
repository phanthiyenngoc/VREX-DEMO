import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 3200,
  //   host:'http://localhost'
  // },
  server: {
    port: 3200,
    host: "0.0.0.0",
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
    include: /\.(tsx?|jsx?)$/,
    exclude: [],
    loader: "tsx",
  },
});
