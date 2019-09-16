const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PerfviewSchema = new Schema({
    userid: {type: String, required: true},
    reviewer : {type : [], required: true}
});


// Export the model
module.exports = mongoose.model('Perfview', PerfviewSchema);