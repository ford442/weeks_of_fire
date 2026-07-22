/// <reference types="vite/client" />

// Support direct JSON module imports for production data (Vite handles at build time)
declare module '*.json' {
  const value: any;
  export default value;
}

