const path = require('path');

module.exports = {
  entry: './temp/javascript/app.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'app_min.js',
    libraryTarget: 'window',
  },
};