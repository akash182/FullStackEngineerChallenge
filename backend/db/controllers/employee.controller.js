const Employee = require('../models/employee.model');
const Auth = require('../models/auth.model');
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Employee controller!');
};


exports.getall_employees = function(req,res){
   Employee.find({ userid : {$ne : req.body.userid}},function(err,emplist){
       if(err){
           console.log(err);
           return err;
       }
       res.send({'Employees': emplist});
   })
}

//add employee to employees table and userid and pwwsord in auths table
exports.add_employee=function(req, res){
    let employee = new Employee({
        name : req.body.name,
        role : req.body.role || 'employee',
        userid : req.body.userid
    });
    employee.save(function(err){
        if (err) {
            console.log(err);
            return err;
        }else{
            let authData = new Auth({
                  userid : req.body.userid,
                  password : req.body.password
              });
            authData.save(function(err){
                if (err) {
                    console.log(err);
                    return err;
                }
                res.send('Employee added successfully');
            }); 
        }
    });
}
    //Remove employee based on user id
  exports.remove_employee = function(req, res){
      
      Employee.deleteOne({ name : req.body.userid},function(err){
            if(err){
                console.log(err);
                return err;
            }
            res.send(req.body.name + " deleted succesfully!");
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
