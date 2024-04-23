import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    server: {
        host: true,
        port: 3000,
        open: true,
    },

    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo && assetInfo.name) {
                        let extType = assetInfo.name.split('.')[0];
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                            extType = 'img';
                        }
                        return `assets/${extType}/[name]-[hash][extname]`;
                    }
                    return '';
                },

                chunkFileNames: 'assets/js/[name]-[hash].js',

                entryFileNames: 'assets/js/[name]-[hash].js',

                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
            },
        },
    },
});
