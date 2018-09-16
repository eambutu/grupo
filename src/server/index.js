const express = require('express');
const path = require('path');

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/grupodb");

var item = new mongoose.Schema({
  name: String,
  quantity: int,
  size: String
});

var orderSchema = new mongoose.Schema({
  name: String,
  venmo: String,
  items: [item]
});

var cartSchema = new mongoose.Schema({
  cartid: String,
  orders: [orderSchema]
});

var cartsSchema = new mongoose.Schema({
  carts: [cartSchema]
});

var Carts = mongoose.model("Carts", cartsSchema);

//TODO: Fix requests below

app.post("/createCart", (req, res) => {
    var myData = new Cart(req.body);
    mongoose.createCollection(req.body.cartid);
});

app.post("/addOrder", (req, res) => {
    var myData = new Order(req.body);
    myData.save()
        .then(item => {
            res.send("Order saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.get("/getCart", (req, res) => {

    res.sendFile();
});

//app.use(express.static('dist'));

app.listen(8080, () => console.log('Listening on port 8080!'));
