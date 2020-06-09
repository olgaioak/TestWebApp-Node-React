  
const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/admin');

const app = express();
 
// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next();
// });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
});

app.use(adminRoutes);

  mongoose
  .connect(
    'mongodb+srv://user1:c1wWSyO5qU1ltIaJ@cluster0-74fe2.mongodb.net/test?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));