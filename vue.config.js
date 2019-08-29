// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css'];


const pxToRem = require('postcss-pxtorem');

const rootPath = '/';
const isProduction = process.env.NODE_ENV === 'production';
// eslint-disable-next-line camelcase
const {
  npm_package_realmName: realmName,
  npm_package_name: name,
  npm_package_homepage: homepage,
  isOss,
} = process.env;

function generatePublicPath() { // 生成插件路径前缀
  switch (true) {
    case isOss === 'true':
      return `${realmName}/${name}`; // 打包后用于CDN/OSS
    case isProduction:
      return homepage || '/counseling/'; // 打包后可直接部署
    default:
      return rootPath; // 打包后为根应用，适用于开发和主域应用
  }
}

module.exports = { // https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
  // options...
  publicPath: generatePublicPath(),
  outputDir: `${name}` || 'checkout.dist',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
      .use('yaml')
      .loader('yaml-loader')
      .end();
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [pxToRem({
          rootValue: 37.5,
          propList: ['*'],
          // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
          // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
          // selectorBlackList: ['weui-'],
        })],
      },
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: '@import "@/assets/styleSheet/variables.scss";',
      },
    },
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
    port: '8084',
    proxy: {
      '/panic/buying': {
        // target: 'http://172.29.18.222:8088', // 开发
        target: 'http://172.29.17.6:8088', // 测试
        changeOrigin: true,
        pathRewrite: {
          '^/panic/buying': '', // rewrite...,
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
  transpileDependencies: [/* 'proxy-polyfill' */],
};
