// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    srcDir: 'src/html',
    

    // Silence on mixed decl sass warnings
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true,
                    silenceDeprecations: ["mixed-decls"]
                }
            }
        }
    }
});
