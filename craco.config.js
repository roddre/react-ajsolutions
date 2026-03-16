module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const ignoreWarnings = webpackConfig.ignoreWarnings || [];

      webpackConfig.ignoreWarnings = [
        ...ignoreWarnings,
        (warning) =>
          typeof warning?.message === "string" &&
          warning.message.includes("Failed to parse source map") &&
          warning.message.includes("antd"),
      ];

      return webpackConfig;
    },
  },
};
