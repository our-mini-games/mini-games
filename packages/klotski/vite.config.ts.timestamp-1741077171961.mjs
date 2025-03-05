// vite.config.ts
import { loadEnv, defineConfig } from "file:///Volumes/personal/www/mini-games/node_modules/.pnpm/vite@3.2.3_@types+node@14.18.33_sass@1.56.0/node_modules/vite/dist/node/index.js";
import vue from "file:///Volumes/personal/www/mini-games/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.3_vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///Volumes/personal/www/mini-games/node_modules/.pnpm/unplugin-auto-import@0.11.4/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_dirname = "/Volumes/personal/www/mini-games/packages/klotski";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, __vite_injected_original_dirname);
  return {
    base: env.VITE_APP_PATHNAME,
    test: {},
    plugins: [
      vue(),
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue/,
          /\.md$/
        ],
        imports: [
          "vue"
        ],
        dirs: [
          "./src/composables"
        ],
        eslintrc: {
          enabled: false
        }
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy9wZXJzb25hbC93d3cvbWluaS1nYW1lcy9wYWNrYWdlcy9rbG90c2tpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVm9sdW1lcy9wZXJzb25hbC93d3cvbWluaS1nYW1lcy9wYWNrYWdlcy9rbG90c2tpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Wb2x1bWVzL3BlcnNvbmFsL3d3dy9taW5pLWdhbWVzL3BhY2thZ2VzL2tsb3Rza2kvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBsb2FkRW52LCBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIF9fZGlybmFtZSlcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBlbnYuVklURV9BUFBfUEFUSE5BTUUsXG4gICAgdGVzdDoge30sXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XG4gICAgICAgICAgL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxuICAgICAgICAgIC9cXC5tZCQvIC8vIC5tZFxuICAgICAgICBdLFxuICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgJ3Z1ZSdcbiAgICAgICAgXSxcbiAgICAgICAgZGlyczogW1xuICAgICAgICAgICcuL3NyYy9jb21wb3NhYmxlcydcbiAgICAgICAgXSxcbiAgICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxTQUFTLG9CQUFvQjtBQUMzVyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFGdkIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxnQ0FBUztBQUNuQyxTQUFPO0FBQUEsSUFDTCxNQUFNLElBQUk7QUFBQSxJQUNWLE1BQU0sQ0FBQztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osV0FBVztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFBVTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNKO0FBQUEsUUFDRjtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1IsU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
