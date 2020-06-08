  
const express = require('express');
const mongoConnect = require('./util/database').mongoConnect;
const app = express();

const adminRoutes = require('./routes/admin');

app.use((req, res, next) => {
    console.log('In the middleware');
    next();
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
});

app.use(adminRoutes);

mongoConnect(() => {
    app.listen(8080);
  });