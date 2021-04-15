const path = require('path')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {test: /\.css$/i,
      use:['style-loader','css-loader'],
      },
      // 处理背景图片，图片，可以使用内部Module
      {test:/\.(png|svg|jpg|jpeg|gif)$/i,
      type:'asset/resource',
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {test: /\.(csv|tsv)$/i,
        use:['csv-loader']
      },
      {test: /\.xml$/i,
        use:['xml-loader']
      },
      // 自定义 parser 替代特定 webpack loader
      {
        test: /\.toml$/i,
        type:'json',
        parser: {
          parse:toml.parse
        }
      },
      {
        test: /\.yaml$/i,
        type:'json',
        parser: {
          parse:yaml.parse
        }
      },
      {
        test: /\.json5$/i,
        type:'json',
        parser: {
          parse:json5.parse
        }
      },
    ]
  }
}