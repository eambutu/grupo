const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/grupodb');

const db = mongoose.connection;

let Cart;
let Order;
let Carts;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  // define schema
  const item = new mongoose.Schema({
    name: String,
    quantity: Number,
    size: String
  });

  const orderSchema = new mongoose.Schema({
    cartid: String,
    name: String,
    venmo: String,
    items: [item]
  });

  const cartSchema = new mongoose.Schema({
    cartid: String,
    orders: [orderSchema]
  });

  const cartsSchema = new mongoose.Schema({
    carts: [cartSchema]
  });

  // Models
  Order = mongoose.model('Order', orderSchema);
  Cart = mongoose.model('Cart', cartSchema);
  Carts = mongoose.model('Carts', cartsSchema);
});

app.post('/createCart', (req, res) => {
  console.log('in create Cart');
  const newCart = new Cart(req.body);
  newCart.save().then(item => {
    res.send("Cart saved to database");
  }).catch(err => {
    res.status(400).send('Unable to save to database');
  });
});

app.post('/addOrder', (req, res) => {
  const myData = new Order(req.body)
  var cartsColl = db.collection('carts');
  cartsColl.findOneAndUpdate({"cartid" : myData.cartid}, {$push: { orders: myData}});
  return true;
});

app.get('/getCart', (req, res) => {
  // TODO: implement
  res.sendFile();
});

app.listen(8080, () => console.log('Listening on port 8080!'));
