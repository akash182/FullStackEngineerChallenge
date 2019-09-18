//app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes'); // Imports routes
const app = express();
const testdata = require('./testdata/data');


//MongoDb Connection
// Set up mongoose connection
const mongoose = require('mongoose');
//let dev_db_url = "mongodb+srv://root:root@cluster0-aivbk.mongodb.net/feedback_review_db?retryWrites=true&w=majority";
let dev_db_url='mongodb://127.0.0.1:27017/feedback_review_db?retryWrites=true&w=majority';
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Remove data if already exist
for(let collection in db.collections){
    if(collection == 'auths' || collection == 'employees' || collection == 'perfviews'){
      db.collection(collection).deleteMany({},(err)=>{
        if(err){
           // console.log(err);
           }
        });
 }
}
//Inserting test data

let authCollection=db.collection('auths');
testdata.authData.forEach((record)=>{
   authCollection.insertOne(record);
});


let empCollection=db.collection('employees');
testdata.employeeData.forEach((record)=>{
    empCollection.insertOne(record);
});

let perfViewCollection=db.collection('perfviews');
testdata.perfviewData.forEach((record)=>{
    perfViewCollection.insertOne(record);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routes);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});