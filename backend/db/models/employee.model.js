const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    name: {type: String, required: true},
    role: {type: String, required: true},
    userid : { type :  String , required : true}
});


// Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);