const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');


connectDB();

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(3000, () => console.log('Server started'));