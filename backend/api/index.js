require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("../models/HoldingsModel");
const { PositionsModel } = require("../models/PositionsModel");
const { OrderModel } = require("../models/OrdersModel");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes


app.get("/",async(req,res)=>{
  await res.send("hello");
});

app.get("/addPosition", async (req, res) => {
  const tempPosition = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  try {
    await Promise.all(
      tempPosition.map((item) => {
        const newPosition = new PositionsModel(item);
        return newPosition.save();
      })
    );
    res.send("Done");
  } catch (err) {
    res.status(500).send("Error saving positions: " + err.message);
  }
});

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).send("Error fetching holdings: " + err.message);
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    res.status(500).send("Error fetching positions: " + err.message);
  }
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrderModel({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    mode: req.body.mode,
  });

  try {
    await newOrder.save();
    res.send("Order Placed");
  } catch (err) {
    res.status(500).send("Error placing order: " + err.message);
  }
});

// app.listen(PORT,()=>{
//   console.log(`connected port on ${PORT}`);
  
// })

// ✅ Export Express app for Vercel
module.exports = app;
