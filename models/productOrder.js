const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productOrderSchema = new Schema({
  productName: { type: String, required: true },
  productCost: { type: String, required: true },
  quantity: { type: Number, required: true },
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: String,
  paymentType: String,
  date: { type: Date, default: Date.now }
});

const ProductOrder = mongoose.model("ProductOrder", productOrderSchema);

module.exports = ProductOrder;
