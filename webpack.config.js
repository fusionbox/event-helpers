var fs = require('fs'),
    webpack = require('webpack');

var banner = "event-helpers - Utils and decorators to help with event handling.";

banner += "\n\n" + fs.readFileSync('LICENSE');

module.exports = {
  context: __dirname,
  entry: './src/event-helpers.js',
  output: {
    path: 'dist',
    filename: 'event-helpers.js',
    libraryTarget: 'umd',
    library: 'EventHelpers',
  },
  module: {
    loaders: [
      {test: /.js$/, loader: 'babel-loader?stage=1'},
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.BannerPlugin(banner),
  ],
};
