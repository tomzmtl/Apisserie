const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const db = require('./api/db');
const productApi = require('./api/products/endpoints');
const userApi = require('./api/user/endpoints');


const app = express();
const handlebars = expressHandlebars.create();

const PORT = process.env.PORT || 3000;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

const AirbrakeClient = require('airbrake-js');
const makeErrorHandler = require('airbrake-js/dist/instrumentation/express');

const airbrake = new AirbrakeClient({
  projectId: 178622,
  projectKey: 'f01b239f5a097fcea29bd2fa5404a8aa',
});


app.use('/public', express.static(path.join(__dirname, '../../dist')));
app.use('/wakemydyno.txt', express.static(path.join(__dirname, '../../dist/static/wakemydyno.txt')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

db();

app.get('/api/v1/products', productApi.get);
app.get('/api/v1/user/:userId', userApi.patch);
app.patch('/api/v1/user/:userId', userApi.patch);

app.get('/favicon.ico', (req, res) =>
  res.status(200).set({ 'Content-Type': 'image/x-icon' }).send());

app.get('*', (req, res) => {
  res.render('index');
});

app.use(makeErrorHandler(airbrake));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 3000!');
});
