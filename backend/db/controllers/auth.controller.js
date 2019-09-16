const Auth = require('../models/auth.model');
const employee = require('../models/employee.model');
//Simple version, without validation or sanitation
exports.authenticate_user = function (req, res) {
    Auth.find({ userid : req.body.userid, password : req.body.password },function(err, user){
        if(err){
            console.log(err);
            return err
        }
        else{
           employee.find({userid : req.body.userid},function(ierr,iuser){
               if(err){
                   console.log(err);
                   return err;
               }
               res.send(iuser);
           })
        }
    });
};