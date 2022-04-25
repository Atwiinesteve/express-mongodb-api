// Importing mongoose.
const mongoose = require('mongoose');
const { MongoCursorInUseError } = require('mongodb');

//Employee Schema.
let employeesSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});

// Registering the emplyees schema inside mongoose.
mongoose.model('Employees', employeesSchema);