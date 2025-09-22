const { model } = require("mongoose");
const { OrderSchema } = require("../schemas/OrderSchema");

const OrderModel = model("Order", OrderSchema);  // renamed

module.exports = { OrderModel };   // ✅ matches index.js
