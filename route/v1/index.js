const app = require('express')();

app.use('/order', require('./order'));

module.exports = app;