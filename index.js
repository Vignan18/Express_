const express = require('express');
const app = express();
const router = express.Router();

const port =  3000;
const products = require('./routes/products')
const users = require('./routes/users');
const orders = require('./routes/orders');

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use('/products',products);
app.use("/users",users);
app.use("/orders",orders);

app.listen(port);