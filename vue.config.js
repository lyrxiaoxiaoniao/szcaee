/**
 * @fileOverview app配置
 * @author liuyouren
 * @date 2018/09/04
 */

const fs = require('fs');
const path = require('path');
const debug = process.env.NODE_ENV !== 'production';
const VueConf = require('./src/config/js/vue_config_class');
const vueConf = new VueConf(process.argv);
// const baseURI = 'https://www.oss.com' // 这里可以配置oss/cdn路径
const baseURI = '';
console.log('');
console.log(
  '----------------------本地启动或构建的文件信息 | start-----------------------------'
);
console.log(vueConf.pages);
console.log(
  '----------------------本地启动或构建的文件信息 | end-------------------------------'
);
console.log('');

module.exports = {
  baseUrl: baseURI + vueConf.baseUrl, // 根域上下文目录
  outputDir: `dist/${process.argv.slice(3)}`, // 构建输出目录
  assetsDir: 'activity', // 静态资源目录 (js, css, img, fonts)
  pages: vueConf.pages,
  // lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  // runtimeCompiler: true, // 运行时版本是否需要编译
  // transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  // productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  configureWebpack: config => {
    // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) {
      // 开发环境配置
      config.devtool = 'cheap-module-eval-source-map';
    } else {
      // 生产环境配置
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.jsx', '.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@scss': path.resolve(__dirname, './src/styles'),
          '@utils': path.resolve(__dirname, './src/utils'),
          vue$: 'vue/dist/vue.esm.js'
        }
      }
    });
  },
  chainWebpack: config => {
    // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // exreenals 配合cdn 外部引用 减少打包体积
    config.output.libraryTarget('umd');
    config.externals({
      jquery: {
        root: 'jQuery',
        global: 'jQuery',
        commonjs: 'jquery',
        commonjs2: 'jquery',
        amd: 'jquery'
      }
    });
    // element-ui 字体图标超过了大小限制，重新修改大小限制
    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: '100000',
        name: `dist/${process.argv.slice(3)}/activity`
      });
    if (debug) {
      // 本地开发配置
    } else {
      // 生产开发配置
    }
  },
  css: {
    // 配置高于chainWebpack中关于css loader的配置
    // modules: true, // 是否开启支持‘foo.module.css’样式,-----element-ui会引入会报错
    modules: false, // 是否开启支持‘foo.module.css’样式
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: {
      // css预设器配置项
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      },
      sass: {
        // 引入全局的sass文件
        data: fs.readFileSync('src/styles/common.scss', 'utf-8')
      },
      stylus: {}
    }
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  // parallel: true, // 构建时开启多进程处理babel编译
  pluginOptions: {
    // 第三方插件配置
  },
  pwa: {
    // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  },
  devServer: {
    publicPath: '/',
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changOrigin: true
      }
    },
    before: app => {}
  }
};
