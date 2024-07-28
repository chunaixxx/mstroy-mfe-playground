const { configure } = require("quasar/wrappers");

const path = require("path");

const webpack = require("webpack");
const MF = require("mf-webpack4");

module.exports = configure(function (/* ctx */) {
  return {
    supportTS: true,
    boot: ["bootModuleService"],
    css: ["app.scss"],
    entry: "./.quasar/main.js",

    extras: ["roboto-font", "material-icons"],
    context: __dirname,

    output: {
      filename: "[name].js",
      chunkFilename: "[name]-[chunkhash].js",
      path: `${__dirname}/dist`,
      publicPath: "http://localhost:8080/",
    },

    build: {
      vueRouterMode: "hash",
      analyze: true,

      chainWebpack(chain) {
        chain.optimization.delete("splitChunks");
        chain.optimization.splitChunks().clear();
      },

      extendWebpack(cfg) {
        cfg.entry = path.resolve(__dirname, "./.quasar/main.js");
        cfg.plugins.push(
          new MF({
            remotes: {
              counter: "counter@http://localhost:9000/remoteEntry.js",
            },
            name: "host",
            filename: "remoteEntry.js",
            shared: [],
          })
        );

        /* cfg.plugins.push(
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
          })
        ); */

        //cfg.output.filename = "someLibName.js";
      },
    },

    vueLoaderOptions: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes("-ce"),
      },
    },

    devServer: {
      https: false,
      port: 8080,
      open: true,

      headers: {
        "Access-Control-Allow-Origin": "*",
      },

      historyApiFallback: true,
    },

    framework: {
      iconSet: "material-icons",
      lang: "en-us",
      config: {},

      importStrategy: "auto",

      plugins: ["Notify"],
    },

    animations: [],

    ssr: {
      pwa: false,
    },

    pwa: {
      workboxPluginMode: "GenerateSW",
      workboxOptions: {},
      manifest: {
        name: `helmet`,
        short_name: `helmet`,
        description: `testing helmet`,
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
        appId: "helmet",
      },

      nodeIntegration: true,

      extendWebpack() {},
    },
  };
});
