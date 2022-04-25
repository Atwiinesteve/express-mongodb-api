// Importing Modules.
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employees = mongoose.model('Employees');

// Main Router.
router.get('/', (req, res) => {
    //     res.json('Employees Data ...');
    //     Opening form.
    res.render('employees/addOrEditEmployees', {
        viewTitle: "Insert Employee"
    })
});


// Creating and Adding a User to Database.
router.post('/', (req, res) => {
    insertRecord(req, res)
});

// Function to insert User data into database
function insertRecord(req, res) {
    const employee = new Employees();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if (!err) {
            res.redirect('employees/list');
        } else {
            console.log('Error During record insertion.');
        }
    })
}

// Employees List.
router.get('/list', (req, res) => {
    res.json('From table of employees list.');
})

// Exporintg Router.
module.exports = router;