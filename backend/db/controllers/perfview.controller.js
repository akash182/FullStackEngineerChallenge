const Perfview = require('../models/perfview.model');
const Feedback = require('../models/feedback.model');
const Employee = require('../models/employee.model');
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Feedback controller!');
};

//add new performance review
exports.add_perfview = function(req, res){
    let perfview = new Perfview({
        userid : req.body.userid,
        reviewer : req.body.reviewer
    });
    perfview.save(function(err){
       if(err){
           console.log(err);
           return err
       }
       res.send({message : "Performance review created successfully"});
    });
}
  //Update performance review information
  exports.update_perfview = function (req, res) {
    Perfview.findOneAndUpdate({userid : req.body.userid}, {$set :  req.body}, function (err, perfview) {
        console.log(perfview);
        if (err) {
            console.log(err);
            return err;
        }
        res.send('Performance Review Details udpated.');
    });  
 }
    //View all performance reviews
    exports.getall_perfviews = function(req,res){
        Perfview.find({ userid : {$ne : null}},function(err,perflist){
            if(err){
                console.log(err);
                return err;
            }
            res.send({'Perfviews': perflist});
        });
     
     }

     //get all pending feedbacks
     exports.getpending_reviews = function(req,res){
         let pending_fbs=[];
         Perfview.find({reviewer : req.params.userid},function(err,emplist){
                 if(err){
                     console.log(err);
                     return err;
                 }else{
                     if(emplist && emplist.length > 0){
                         let counter=0;
                         emplist.forEach((emp)=>{
                             Feedback.find({ userid : emp.userid, reviewer : req.body.userid },function(err, fblist){
                                     if(err){
                                         console.log(err);
                                         return err;
                                     }
                                     if(fblist && fblist.length ==0){
                                        Employee.findOne({ userid : emp.userid},function(err,resEmp){
                                            if(err){
                                                return err;
                                            }else{
                                                pending_fbs.push(resEmp);         
                                                counter++;

                                                if(counter==emplist.length){
                                                    res.send(pending_fbs);
                                                }
                                            }
                                        })
                                     }

                             });
                         })
                     } 
                 }
         });
     }


