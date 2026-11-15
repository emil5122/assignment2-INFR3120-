let createError = require('http-errors');
let express = require('express');
let path = require('path');
//let cookieParser = require('cookie-parser');
//let logger = require('morgan');

let indexRouter = require('./routes/index'); // Where the website routes are.

let app = express(); // Creates the express app.

// view engine setup
app.set('views', path.join(__dirname, 'views')); // Tells express where our views are in /views/
app.set('view engine', 'ejs'); // Specifies we are using ejs for rendering/views.

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Makes the /public folder public
app.use(express.static(path.join(__dirname, 'node_modules'))); // Allows site to access node_modules files.

app.use('/', indexRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title:'error'});
});

module.exports = app;
