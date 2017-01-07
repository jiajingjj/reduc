var express = require('express'),
  webpack = require('webpack'),
  config = require('./webpack.dev.conf'),
  app = express();

var compiler = webpack(config);


app.use('/static', express.static(config.commonPath.staticDir));


app.use(require('connect-history-api-fallback')());


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.use(require('webpack-hot-middleware')(compiler));

app.listen(9000, '127.0.0.1', function(err) {
  err && console.log(err);
});
