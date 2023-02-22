// export default {
//     root: 'src',
//     build: {
//         outDir: '../dist'
//     }
// }

import { resolve } from 'path'
import { defineConfig } from "vite"

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    base: "/vc-casaments/vc-casaments-testes",
    root,
     build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
        input: {
            main: resolve(root, 'index.html'),
            home: resolve(root, 'home','index.html'),
        },
    },
  },
})