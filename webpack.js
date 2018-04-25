const webpack = require('webpack'),
  webpackConfig = require('./webpack.config.js');

const bundler = webpack(webpackConfig);

bundler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(...info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(...info.warnings);
  }
});
