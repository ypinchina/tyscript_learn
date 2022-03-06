const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
// 引入一个包
module.exports = {
  entry: "./src/index.ts",
  // 指定入口文件
  output: {
    // 指定打包的出口
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false,
      // 打包出来的js不使用箭头函数
      const: false
      // 关闭const 兼容ie10
    }
  },
  module: {
    // webpack打包时使用的模块
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            // 复杂配置loader
            // 配置babel
            loader: "babel-loader",
            options: {
              // 设置预定义的信息
              presets: [[
                '@babel/preset-env',
                {
                  targets: {
                    // 要兼容的浏览器
                    'chrome': 58,
                    'ie': 11
                  },
                  // 指定corejs的版本
                  'corejs': 3,
                  'useBuiltIns': 'usage'
                  // 按需加载，节约性能
                }
              ]],
            },
          },
          // 简单配置loader
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [[
                'postcss-preset-env',
                {
                  browsers: 'last 2 versions'
                  // 最近浏览器的两个版本的兼容
                }
              ]]
            }
          }
        }, 'stylus-loader']
      }
    ],
    // 指定规则
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // 使用html-webpack-plugin 插件 ，打包时自动生成html文件
  resolve: {
    extensions: [".ts", ".js"],
  },
  // import导入模块时识别.ts为后缀的文件
};
