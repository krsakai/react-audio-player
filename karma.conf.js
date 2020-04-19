module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    files: [
      './spec/*_spec.js',
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      './spec/*_spec.js': ['webpack'],
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          },
          {
            test: /\.ogg/,
            loader: 'file-loader'
          }
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
