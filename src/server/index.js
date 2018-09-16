const express = require('express');
const path = require('path');

const app = express();

	
const MongoClient = require('mongodb').MongoClient;

//MongoClient.connect('mongodb://localhost:27017/db', { useNewUrlParser: true }, (err, db) => {
//    let databaseName = 'Grupo';
//    let database = db.db(databaseName);
   // carts = database.collection('carts');
//    
//});


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/grupodb");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
    //define schema
    var item = new mongoose.Schema({
      name: String, 
      quantity: Number,, 
      size: String
    });

    var orderSchema = new mongoose.Schema({
      cartid: String,
      name: String,
      venmo: String,
      items: [item]
    });

    var cartSchema = new mongoose.Schema({
      cartid: String,
      orders: [orderSchema]
    });

    var Cart = mongoose.model("Cart", cartSchema);

    var cartsSchema = new mongoose.Schema({
      carts: [cartSchema]
    });

    //Models
    var Order = mongoose.model("Order", orderSchema);
    var Carts = mongoose.model("Carts", cartsSchema);
}
mongoose.createCollection("Carts");

app.post("/createCart", (req, res) ==> {
    var newCart = new Cart(req.body);
    newCart.save(function (error, newCart) {
      if (err) return console.error(err);
      // saved!
    });
});    

app.post("/addOrder", (req, res) => {
    var myData = new Order(req.body)
    var currentCart = db.Carts.find({id: myData.cartId});
    var currentCartItems = currentCart.orders;
    var updatedCartItems = $concatArrays: [currentCartItems, [myData]];
    db.Carts.findOneAndUpdate({"id": myData.cartId}, 
    myData.save()
        .then(item => {
            res.send("Order saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.get("/getCart", (req, res) => {
    // TODO: implement
    res.sendFile();
});

//app.use(express.static('dist'));

app.listen(8080, () => console.log('Listening on port 8080!'));
