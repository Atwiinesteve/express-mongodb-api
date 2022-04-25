require('./models/db.js')
    // const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');

// Importing Employees Module/Route.
const employeeRoutes = require('./controllers/employeeController.js');

// Application Setup
const app = express();
const PORT = process.env.PORT || 5000;

// Using encoded data.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Setting Views for the Application.
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');

// Using Middleware for Employees.
app.use('/employees', employeeRoutes);

// Server Listening Setup.
app.listen(PORT, () => { console.log(`Server Application Running at http://localhost:${PORT}`); });