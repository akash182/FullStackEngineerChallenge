const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AuthSchema = new Schema({
    userid : { type :  String , required : true},
    password : { type :  String , required : true}
});


// Export the model
module.exports = mongoose.model('Auth', AuthSchema);