const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const UserRoute = require('./Routes/userRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));

//useage of route
app.use('/user', UserRoute);


module.exports = app;
