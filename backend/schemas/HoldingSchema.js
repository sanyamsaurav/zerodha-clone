const { Schema, model } = require('mongoose');

const holdingSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: { type: String, required: true },
  day: { type: String, required: true },
});

// "Holding" is the collection model name (Mongo will pluralize to "holdings")
module.exports = model("Holding", holdingSchema);
