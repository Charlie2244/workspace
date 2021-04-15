const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index:'./src/index.js',
    another: './src/another-module.js',
   
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase:'./dist'
  },
  
  output: {
    filename: '[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}