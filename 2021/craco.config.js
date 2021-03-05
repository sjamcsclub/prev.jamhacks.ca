const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#7B0FF7',
              '@font-family': 'Inter',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
