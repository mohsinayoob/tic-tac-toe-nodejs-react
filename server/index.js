var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var api = require('./routes/api');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

var app = express();
app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


const swaggerDocument = YAML.load(path.resolve('server', 'tictactoe.yaml'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Method', 'GET, POST, HEAD, OPTIONS, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
  next();
});

app.use('/api', api);

app.use(express.static("build"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("build", "index.html"))
);
app.all('*', function (req, res) {
  res.status(404).send('Nothing Here');
});

module.exports = server;