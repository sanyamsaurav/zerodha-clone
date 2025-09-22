const { Schema, model } = require("mongoose");

const PositionsSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true }, // e.g., "BUY"/"SELL"
  date: { type: Date, default: Date.now }
});

module.exports = model("Position", PositionsSchema);
