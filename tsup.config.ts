import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  esbuildPlugins: [],
  esbuildOptions: (options) => {
    options.jsx = 'automatic'
  },
})
