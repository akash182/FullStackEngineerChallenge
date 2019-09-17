const Employee = require('../models/employee.model');
const Auth = require('../models/auth.model');
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Employee controller!');
};


exports.getall_employees = function(req,res){
   Employee.find({ userid : {$ne : req.params.userid}},function(err,emplist){
       if(err){
           console.log(err);
           return err;
       }
       res.send(emplist);
   })
}

//add employee to employees table and userid and pwwsord in auths table
exports.add_employee=function(req, res){
    let max_user;
    Employee.find({ userid : {$ne : null}}).sort('-userid').exec(function(err , user){
       max_user= user;
       let max_id_number=parseInt(max_user[0].userid.slice(-3)) + 1;
       let paddedNumber = (max_id_number+"").padStart(3,'0');
    let user_id ="vc"+paddedNumber;
    let employee = new Employee({
        name : req.body.name,
        role : req.body.role || 'employee',
        userid : user_id
    });
    employee.save(function(err){
        if (err) {
            console.log(err);
            return err;
        }else{
            let authData = new Auth({
                  userid : user_id,
                  password : req.body.password
              });
            authData.save(function(err){
                if (err) {
                    console.log(err);
                    return err;
                }
                res.send({messgae : 'Employee added successfully'});
            }); 
        }
    });
    });
    
}
    //Remove employee based on user id
  exports.remove_employee = function(req, res){
      
      Employee.deleteOne({ userid : req.params.userid},function(err){
            if(err){
                console.log(err);
                return err;
            }
       Auth.deleteOne({ userid : req.params.userid},function(err){
        if(err){
            console.log(err);
            return err;
        }
        res.send({message : 'Success'});
       })  
      });
  }

  //Update emloyee information
  exports.update_employee = function (req, res) {
    Employee.findOneAndUpdate({userid : req.body.userid}, {$set :  req.body}, function (err, employee) {
        console.log(employee);
        if (err) {
            console.log(err);
            return err;
        }
        res.send(employee.name + ' Details udpated.');
    });
};
