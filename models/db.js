// Importing MongoDB modules.
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/EmployeesDB', {
    useNewUrlParser: true,
}, err => {
    if (!err) {
        console.log(`Server Connection made Successfully ...`)
    } else {
        console.log(`Server Connection Failed ...` + err);
    }
});

// Requiring the Schema.
require('./employee.model.js');