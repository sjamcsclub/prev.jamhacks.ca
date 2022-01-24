const CracoLessPlugin = require('craco-less');

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
