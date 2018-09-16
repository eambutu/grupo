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

  Cart = mongoose.model('Cart', cartSchema);

  const cartsSchema = new mongoose.Schema({
    carts: [cartSchema]
  });

  // Models
  Order = mongoose.model('Order', orderSchema);
  Carts = mongoose.model('Carts', cartsSchema);
});
db.createCollection('Carts');

app.post('/createCart', (req, res) => {
  const newCart = new Cart(req.body);
  newCart.save((err) => {
    if (err) return console.error(err);
    // saved!
    return null;
  });
});

app.post('/addOrder', (req, res) => {
  const myData = new Order(req.body)
  const currentCart = Carts.find({ id: myData.cartId });
  const currentCartItems = currentCart.orders;
  const updatedCartItems = {$concatArrays: [currentCartItems, [myData]]};
  db.Carts.findOneAndUpdate({ cartid: myData.cartId },
    myData.save().then(item => {
      res.send("Order saved to database");
    }).catch(err => {
      res.status(400).send('Unable to save to database');
    }));
});

app.get('/getCart', (req, res) => {
  // TODO: implement
  res.sendFile();
});

app.listen(8080, () => console.log('Listening on port 8080!'));
