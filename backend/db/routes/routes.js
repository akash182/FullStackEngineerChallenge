const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employee_controller = require('../controllers/employee.controller');
const perfview_controller = require('../controllers/perfview.controller');
const feedback_controller =  require('../controllers/feedback.controller');
const auth_controller = require('../controllers/auth.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/employee', employee_controller.test);
router.get('/feedbacks', feedback_controller.test);
router.get('/login', auth_controller.authenticate_user);

//Employee Related operations
router.post('/add_employee', employee_controller.add_employee);
router.delete('/remove_employee', employee_controller.remove_employee);
router.put('/update_employee', employee_controller.update_employee);
router.get('/getall_employees/:userid', employee_controller.getall_employees);

//Authentication
router.post('/authenticate_user', auth_controller.authenticate_user);

//Performance review related operations
router.post('/add_perfviews', perfview_controller.add_perfview);
router.put('/update_perfviews', perfview_controller.update_perfview);
router.get('/getall_perfviews', perfview_controller.getall_perfviews);

//feedback related operations
router.get('/getpending_reviews/:userid', perfview_controller.getpending_reviews);

//Add feedback
router.post('/add_feedback', feedback_controller.add_feedback);
module.exports = router;