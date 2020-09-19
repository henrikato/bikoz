module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver", {
          "root": "./",
          "alias": {
            "components": "./src/components",
            "navigation": "./src/navigation",
            "screens": "./src/screens",
            "services": "./src/services",
            "store": "./src/store",
            "util": "./src/util",
            "assets": "./assets",
          }
        }
      ]
    ]
  };
};
