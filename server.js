// ******************************************
// INITIALIZATION
// ******************************************
// Dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Configuration
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = { origin: ['http://localhost:4200'] }

// Routes
const angular = require('./routes/angular');
const api = require('./routes/api');

// Connect to database via mongoose
const config = require('./config/database');
mongoose.connect(config.database)
    .then(() => console.log(`Connected to database ${config.database}`))
    .catch((err) => console.log(`Database error: ${err}`));

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

// Cross-Origin Resource Sharing (CORS)
app.use(cors(corsOptions));

// ******************************************
// ROUTES
// ******************************************
// Route for Angular
app.use('/', angular);

// Route APIs
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
    // set locals, only providing error in development
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