// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import Fonts from 'unplugin-fonts/vite'
import VueRouter from 'unplugin-vue-router/vite'
 
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite' 
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite' 
import { VueRouterAutoImports, getPascalCaseRouteName } from 'unplugin-vue-router'  
import VueDevTools from 'vite-plugin-vue-devtools'
import MetaLayouts from 'vite-plugin-vue-meta-layouts' 
import svgLoader from 'vite-svg-loader'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production'
  const isDev = mode === 'development'
  const buildDir = "/"
  return {
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    MetaLayouts({
      target: './src/layouts',
      defaultLayout: 'default',
    }),
    Components({
      dirs: ['src/@core/components', 'src/views/demos', 'src/components'],
      dts: true,
      resolvers: [
        componentName => {
          // Auto import `VueApexCharts`
          if (componentName === 'VueApexCharts')
            return { name: 'default', from: 'vue3-apexcharts', as: 'VueApexCharts' }
        },
      ],
    }),
    AutoImport({
      imports: ['vue', VueRouterAutoImports, '@vueuse/core', '@vueuse/math', 'vue-i18n', 'pinia'],
      dirs: [
        './src/@core/utils',
        './src/@core/composable/',
        './src/composables/',
        './src/utils/',
        './src/plugins/*/composables/*',
      ],
      vueTemplate: true,
          // ℹ️ Disabled to avoid confusion & accidental usage
          ignore: ['useCookies', 'useStorage'],
          eslintrc: {
            enabled: true,
            filepath: './.eslintrc-auto-import.json',
          },
        }),
    Fonts({
      fontsource: {
        families: [
          {
            name: 'Roboto',
            weights: [  500 ],
            styles: ['normal' ],
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: [
      'vuetify',
      'vue-router',
      'unplugin-vue-router/runtime',
      'unplugin-vue-router/data-loaders',
      'unplugin-vue-router/data-loaders/basic',
    ],
  },
  define: {
    __APP_ENV__: JSON.stringify(mode),
  },
  base: isProd ? buildDir : '/',
  
  resolve: {
    alias: { 
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@themeConfig': fileURLToPath(new URL('./themeConfig.js', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images/', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles/', import.meta.url)),
      '@configured-variables': fileURLToPath(new URL('./src/assets/styles/variables/_template.scss', import.meta.url)),
      '@db': fileURLToPath(new URL('./src/plugins/fake-api/handlers/', import.meta.url)),
      '@api-utils': fileURLToPath(new URL('./src/plugins/fake-api/utils/', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    sourcemap: isDev, // เปิด sourcemap เฉพาะ dev
    minify: isProd,   // minify เฉพาะ prod
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/'+ Math.floor(Math.random() * 999999999) +'.js',   // For entry points
        chunkFileNames: 'assets/js/'+Math.floor(Math.random() * 999999999)+'.js',   // For chunks
        assetFileNames: 'assets/style/'+Math.floor(Math.random() * 999999999)+'.[ext]' // For other assets (e.g. CSS)
      }
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',
      },
      scss: {
        api: 'modern-compiler',
      },
    },
  },
}
})
