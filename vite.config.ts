import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import terser from '@rollup/plugin-terser';

export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': `${resolve(__dirname, 'src')}`,
      },
      dedupe: ['vue'],
    },
    server: {
      host: 'localhost',
      port: 3000,
      open: false,
    },
    build: {
      assetsDir: 'assets',
      sourcemap: false,
      chunkSizeWarningLimit: 1024,
      emptyOutDir: true,
      rollupOptions: {
        cache: false,
        treeshake: false,
        output: {
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
        plugins: [terser()],
      },
    },
  };
});
