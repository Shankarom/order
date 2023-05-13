const app = require('express')();

app.use('/api/v1', require('./v1/index'));

module.exports = app;