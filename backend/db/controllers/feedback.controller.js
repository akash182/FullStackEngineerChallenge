const Feedback = require('../models/feedback.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Feedback controller!');
};
exports.add_feedback=function(re, req){
    let feedback = new Feedback({
        userid : req.body.userid,
        rating : req.body.rating,
        feedback : req.body.feedback,
        reviewer : req.body.reviewer
    });
    feedback.save(function(err){
       if(err){
           console.log(err);
           return err
       }
       res.send("Feedback added successfully");
    }); 
}