const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {join} = require("path") 
const showMiddleWare = require("./lib/middleware.js")
const { createClient } = require('@supabase/supabase-js')
const bodyParser = require("body-parser")
const flash = require("connect-flash");
const session = require("express-session")
const authGuard = require('./lib/authGuard');

const homeHandler = require('./routeHandlers/homeHandler.js');
const adminHandler = require('./routeHandlers/adminHandler.js');

const app = express();

app.use(express.static(join(__dirname, "public")))

app.use(bodyParser.urlencoded({extended: false}))
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));

app.set('view engine', 'ejs');
app.use(expressLayouts)

// app.set('layout', false)
app.set('views', "./resources/views")
app.use(flash())
app.use(showMiddleWare)

app.use(async function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});
 
app.use('/', homeHandler);
app.use('/admin', authGuard, adminHandler)
// app.use('*', (req, res) => {
// 	res.show('404', {title: '404 page'})
// })

app.listen(process.env.PORT || 500, console.log("App started on port %s", process.env.PORT || 500))

module.exports = app;