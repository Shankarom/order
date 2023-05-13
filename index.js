const express = require('express');
const mongo = require('./config/database')
const bodyparser = require('body-parser');
const app = express()


/*assuming an express app is declared here*/
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const port = process.env.PORT 

require('dotenv').config()

// const route = require('./route/index')

app.use(require('./route/index'));

app.listen(port, () => {
    console.log(`successful run at particular port number ${port}`);
})