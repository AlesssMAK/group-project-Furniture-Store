// vite.config.js
import { defineConfig } from "file:///C:/Users/super/Desktop/%D1%96%D1%82/Junior%20Fullstack%20Developer/JS/group-project-Furniture-Store/node_modules/vite/dist/node/index.js";
import { glob } from "file:///C:/Users/super/Desktop/%D1%96%D1%82/Junior%20Fullstack%20Developer/JS/group-project-Furniture-Store/node_modules/glob/dist/esm/index.js";
import injectHTML from "file:///C:/Users/super/Desktop/%D1%96%D1%82/Junior%20Fullstack%20Developer/JS/group-project-Furniture-Store/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///C:/Users/super/Desktop/%D1%96%D1%82/Junior%20Fullstack%20Developer/JS/group-project-Furniture-Store/node_modules/vite-plugin-full-reload/dist/index.js";
import SortCss from "file:///C:/Users/super/Desktop/%D1%96%D1%82/Junior%20Fullstack%20Developer/JS/group-project-Furniture-Store/node_modules/postcss-sort-media-queries/index.js";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === "commonHelpers") {
              return "commonHelpers.js";
            }
            return "[name].js";
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".html")) {
              return "[name].[ext]";
            }
            return "assets/[name]-[hash][extname]";
          }
        }
      },
      outDir: "../dist",
      emptyOutDir: true
    },
    plugins: [
      injectHTML(),
      FullReload(["./src/**/**.html"]),
      SortCss({
        sort: "mobile-first"
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzdXBlclxcXFxEZXNrdG9wXFxcXFx1MDQ1Nlx1MDQ0MlxcXFxKdW5pb3IgRnVsbHN0YWNrIERldmVsb3BlclxcXFxKU1xcXFxncm91cC1wcm9qZWN0LUZ1cm5pdHVyZS1TdG9yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc3VwZXJcXFxcRGVza3RvcFxcXFxcdTA0NTZcdTA0NDJcXFxcSnVuaW9yIEZ1bGxzdGFjayBEZXZlbG9wZXJcXFxcSlNcXFxcZ3JvdXAtcHJvamVjdC1GdXJuaXR1cmUtU3RvcmVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3N1cGVyL0Rlc2t0b3AvJUQxJTk2JUQxJTgyL0p1bmlvciUyMEZ1bGxzdGFjayUyMERldmVsb3Blci9KUy9ncm91cC1wcm9qZWN0LUZ1cm5pdHVyZS1TdG9yZS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XHJcbmltcG9ydCBpbmplY3RIVE1MIGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0JztcclxuaW1wb3J0IEZ1bGxSZWxvYWQgZnJvbSAndml0ZS1wbHVnaW4tZnVsbC1yZWxvYWQnO1xyXG5pbXBvcnQgU29ydENzcyBmcm9tICdwb3N0Y3NzLXNvcnQtbWVkaWEtcXVlcmllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCB9KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmluZToge1xyXG4gICAgICBbY29tbWFuZCA9PT0gJ3NlcnZlJyA/ICdnbG9iYWwnIDogJ19nbG9iYWwnXToge30sXHJcbiAgICB9LFxyXG4gICAgcm9vdDogJ3NyYycsXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBpbnB1dDogZ2xvYi5zeW5jKCcuL3NyYy8qLmh0bWwnKSxcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IGNodW5rSW5mbyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaHVua0luZm8ubmFtZSA9PT0gJ2NvbW1vbkhlbHBlcnMnKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICdjb21tb25IZWxwZXJzLmpzJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ1tuYW1lXS5qcyc7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGFzc2V0SW5mbyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSAmJiBhc3NldEluZm8ubmFtZS5lbmRzV2l0aCgnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAnW25hbWVdLltleHRdJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgb3V0RGlyOiAnLi4vZGlzdCcsXHJcbiAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgaW5qZWN0SFRNTCgpLFxyXG4gICAgICBGdWxsUmVsb2FkKFsnLi9zcmMvKiovKiouaHRtbCddKSxcclxuICAgICAgU29ydENzcyh7XHJcbiAgICAgICAgc29ydDogJ21vYmlsZS1maXJzdCcsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErYyxTQUFTLG9CQUFvQjtBQUM1ZSxTQUFTLFlBQVk7QUFDckIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhO0FBRXBCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsUUFBUSxNQUFNO0FBQzNDLFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLENBQUMsWUFBWSxVQUFVLFdBQVcsU0FBUyxHQUFHLENBQUM7QUFBQSxJQUNqRDtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLFFBQ2IsT0FBTyxLQUFLLEtBQUssY0FBYztBQUFBLFFBQy9CLFFBQVE7QUFBQSxVQUNOLGFBQWEsSUFBSTtBQUNmLGdCQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFVBQ0EsZ0JBQWdCLGVBQWE7QUFDM0IsZ0JBQUksVUFBVSxTQUFTLGlCQUFpQjtBQUN0QyxxQkFBTztBQUFBLFlBQ1Q7QUFDQSxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBLGdCQUFnQixlQUFhO0FBQzNCLGdCQUFJLFVBQVUsUUFBUSxVQUFVLEtBQUssU0FBUyxPQUFPLEdBQUc7QUFDdEQscUJBQU87QUFBQSxZQUNUO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxXQUFXLENBQUMsa0JBQWtCLENBQUM7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
