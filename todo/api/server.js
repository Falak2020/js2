const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT||9999;
require('dotenv').config()
const serverURI = 'http://localhost:' + port;
const mongoURI =process.env.MONGO_URI


app.listen(port, () => console.log('Webserver: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to DB'));