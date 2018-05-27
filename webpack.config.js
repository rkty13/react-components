const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

const srcDir = path.join(__dirname, './src/');

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: [path.join(srcDir, 'index.js')],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        include: srcDir,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
