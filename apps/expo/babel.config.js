const path = require("path");

module.exports = function (api) {
  const envPath = path.resolve(__dirname, `../../`, `.env`);
  require("dotenv").config({ path: envPath });
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      ["nativewind/babel"],
      require.resolve("expo-router/babel"),
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: "../../.env",
          allowlist: ["NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"],
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["../.."],
          alias: {
            // define aliases to shorten the import paths
            app: "../../packages/app",
            "@my/ui": "../../packages/ui",
          },
          extensions: [".js", ".jsx", ".tsx", ".ios.js", ".android.js"],
        },
      ],
    ],
  };
};
