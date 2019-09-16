const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FeedbackSchema = new Schema({
    userid: {type: String, required: true},
    rating: {type: String, required: true},
    feedback : { type :  String , required : true},
    reviewer : {type : String, required: true}
});


// Export the model
module.exports = mongoose.model('Feedback', FeedbackSchema);