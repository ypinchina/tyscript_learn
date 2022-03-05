const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// 引入一个包
module.exports = {
  entry: './src/index.ts',
  // 指定入口文件
  output: {
    // 指定打包的出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    // webpack打包时使用的模块
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
    // 指定规则
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
}