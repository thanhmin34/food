module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: "./components",
            constants: "./constants",
            navigate: "./navigate",
            utils: "./utils",
            screens: "./screens",
            hooks: "./hooks",
            styles: "./styles",
            lang: "./lang",
            routers: "./routers",
            services: "./services",
            assets: "./assets",
          },
        },
      ],
    ],
  };
};
