// ******************************************
// INITIALIZATION
// ******************************************
// Dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Configuration
const app = express();
const port = process.env.PORT || 3000;

// Routes
const angular = require('./node_src/routes/angular');
const api = require('./node_src/routes/api');

// Connect to database via mongoose
require('./node_src/config/db');

// View engine
app.set('view engine', 'html');
app.set('views', 'dist');

// ******************************************
// MIDDLEWARE
// ******************************************
// Morgan
app.use(logger('dev'));

// Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ******************************************
// ROUTES
// ******************************************
// Route for Angular
app.use('/', angular);

// Route for APIs go here
app.use('/api', api);

// ******************************************
// API ERROR HANDLER
// ******************************************
// Error handler for 404 - Page Not Found
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    res.status(404).json({
        status: 404,
        message: err.message,
        name: err.name
    });
});

// Error handler for all other errors
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({
        status: 500,
        message: err.message,
        name: err.name
    });
});

// ******************************************
// SERVER START
// ******************************************
app.listen(port, () => console.log(`Server started on port ${port}`));