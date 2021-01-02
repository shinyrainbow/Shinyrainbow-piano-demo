const path = require('path')
var webpack = require('webpack');
module.exports = {
  entry: './src/app.js',
  // output: {
  //   path: path.resolve(__dirname, 'public'),
  //   filename: 'bundle.js'
  // },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css/,
        use:['style-loader',
        'css-loader',
        'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            limit: 25000,
          }
        },
        ]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
           process: 'process/browser',
    }),
],
  resolve: {
    fallback: { 
      "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "zlib": false,
    "http": false,
    "https": false,
    "stream": false,
    "crypto": false,
    "crypto-browserify": false,
    "assert": false,
    "constants": false,
    "os": false,
    "buffer": false,
    "vm": false 
      }
  },
  mode: 'development',
  // devServer: {
  //   contentBase: __dirname + '/public',
  //   // port: 4001,
  //   historyApiFallback: {
  //     disableDotRule: true
  //   }
  // },
  devServer: {
    contentBase: __dirname + '/public',
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  externals: [
    'child_process','worker_threads'
  ],
//   plugins: [
//     new webpack.DefinePlugin({
//         'process.env.NODE_ENV': JSON.stringify('development')
//     })
//   ],
}