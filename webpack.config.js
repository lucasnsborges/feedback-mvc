const getConfig = require("wprun");

const DEV = process.env.NODE_ENV === "development";

module.exports = getConfig(__dirname, {
  copyPluginOptions: [{ from: "*.png", to: "./assets", context: "assets" }],
  htmlPluginOptions: {
    title: "FeedbackMVC",
    description: "FeedbackMVC",
  },
  externalsPluginOptions: {
    externals: [
      {
        module: "hyperhtml",
        global: "hyperHTML",
        entry: DEV ? "umd.js" : "https://unpkg.com/hyperhtml@2.16.0/umd.js",
      },
    ],
  },
});
