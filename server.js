const express = require('express');
const bodyParser = require('body-parser');

const { setStatic } = require('./utils/static');
const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');

const app = express();

// MIddewares
app.use(bodyParser.urlencoded({ extended: false }));
// End of middleware

// EJS
app.set("view engine", "ejs");
app.set("views", "views");
// End of EJS

// Static
setStatic(app)
// End of static

// Routes
app.use('/admin', adminRoutes)
app.use(indexRoutes)
// End of routes


app.listen(3000, () => console.log('Server Is Running'))