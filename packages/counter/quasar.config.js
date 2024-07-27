const { configure } = require("quasar/wrappers");

const { ModuleFederationPlugin } = require("webpack").container;
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

const dependencies = require("./package.json").dependencies;

module.exports = configure(function (ctx) {
  return {
    supportTS: true,
    boot: [],
    entry: "./.quasar/main.js",

    css: ["app.scss"],

    extras: ["roboto-font", "material-icons"],

    output: {
      filename: "[name].js",
      chunkFilename: "[name]-[chunkhash].js",
      path: `${__dirname}/dist`,
      publicPath: "http://localhost:9000/",
    },

    build: {
      vueRouterMode: "hash",

      extendWebpack(cfg) {
        cfg.entry = path.resolve(__dirname, "./.quasar/main.js");
        console.log(path.resolve(__dirname, "./.quasar/main.js"));

        cfg.plugins.push(
          new ModuleFederationPlugin({
            name: "counter",
            filename: "remoteEntry.js",
            exposes: {
              "./registerWebComponent": "./src/registerWebComponent",
            },
            shared: {
              pinia: {
                eager: true,
              },
              "@quasar/extras": {
                eager: true,
              },
              "core-js": {
                eager: true,
              },
              quasar: {
                eager: true,
              },

              vue: { eager: true },
              "vue-router": { eager: true },
            },
          })
        );

        /* cfg.resolve.alias = {
          ...cfg.resolve.alias,
          vue: path.resolve("./node_modules/vue"),
        }; */
      },

      chainWebpack(chain) {
        chain.optimization.delete("splitChunks");
        chain.optimization.splitChunks().clear();
      },
    },

    devServer: {
      server: {
        type: "http",
      },
      port: 9000,
      open: true,

      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      static: path.join(__dirname, "dist"),
    },

    framework: {
      config: {},

      plugins: [],
    },

    animations: [],

    ssr: {
      pwa: false,

      prodPort: 3000,

      maxAge: 1000 * 60 * 60 * 24 * 30,

      middlewares: [ctx.prod ? "compression" : "", "render"],
    },

    pwa: {
      workboxPluginMode: "GenerateSW",
      workboxOptions: {},

      manifest: {
        name: `module-1`,
        short_name: `module-1`,
        description: ``,
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#027be3",
        icons: [
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      bundler: "packager",

      packager: {},

      builder: {
        appId: "module-1",
      },

      chainWebpackMain() {},

      chainWebpackPreload() {},
    },
  };
});
