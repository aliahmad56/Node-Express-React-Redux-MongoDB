// app.js or index.js

const express = require('express');
require('./db/config');
const Restaurant = require('./db/models/Restaurant');
const cors= require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/addresturant", async (req, resp)=> {
  let add_restaurant= new Restaurant(req.body);
  let result= await add_restaurant.save();
  resp.send(result);
});

app.get("/showrestaurant", async (req, resp)=> {
  let restaurantlist= await Restaurant.find();
 if (restaurantlist.length>0)
 {
    resp.send(restaurantlist)
 }
 else{
   resp.send("No data Found")
 }
}),


app.put("/updatedresto/:id", async (req, resp)=> {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    resp.json(restaurant);
  } catch (error) {
    resp.status(500).json({ error: 'Could not update restaurant' });
  }
});

app.delete('/deleteresto/:id', async (req, res) => {
  console.log('Checking from node file');
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    console.log("Checking from index file");
    res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: 'Could not delete restaurant' });
  }
});


app.listen(5000);