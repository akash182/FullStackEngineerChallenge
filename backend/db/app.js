//app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes'); // Imports routes for the products
const app = express();



//MongoDb Connection
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = "mongodb+srv://root:root@cluster0-aivbk.mongodb.net/feedback_review_db?retryWrites=true&w=majority";
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routes);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});