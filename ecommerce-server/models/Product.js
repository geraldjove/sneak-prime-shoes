const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productImage: {
    type: String,
    required: [true, "required Image"],
  },
  productName: {
    type: String,
    required: [true, "required Product Name"],
  },
  productDescription: {
    type: String,
    required: [true, "required Product Description"],
  },
  productSizes: {
    type: String,
    enum: ["Extra Small", "Small", "Medium", "Large", "Extra Large"],
  },
  productColors: {
    type: String,
    enum: ["Black", "Gray", "White"],
  },
  productRating: {
    type: Number,
    default: 0,
  },
  productPrice: {
    type: String,
    required: [true, "required Price"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isOnSale: {
    type: Boolean,
    default: false,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
