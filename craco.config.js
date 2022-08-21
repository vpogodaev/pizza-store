// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@app': resolvePath('./src/app'),
      '@entities': resolvePath('./src/entities'),
      '@features': resolvePath('./src/features'),
      '@pages': resolvePath('./src/pages'),
      '@shared': resolvePath('./src/shared'),
      '@widgets': resolvePath('./src/widgets'),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: '@import "src/app/styles/ds-system/ds-styles.scss"; @import "src/app/styles/mixins/mixins.scss";',
      },
    },
  },
};
