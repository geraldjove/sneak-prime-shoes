const Product = require("../models/Product");

module.exports.createProduct = async (req, res) => {
  try {
    const {
      productImage,
      productName,
      productDescription,
      productSizes,
      productColors,
      productPrice,
      productRating,
      isActive,
      isOnSale,
      createdOn,
    } = req.body;
    const product = await Product.findOne({ productName });

    if (product) {
      res.send({ message: "Product already exists" });
    } else {
      const newProduct = new Product({
        productImage,
        productName,
        productDescription,
        productSizes,
        productColors,
        productRating,
        productPrice,
        isActive,
        isOnSale,
        createdOn,
      });

      const saveProduct = await newProduct.save();

      if (saveProduct) {
        res.send(saveProduct);
      } else {
        res.send("Error saving product");
      }
    }
  } catch (error) {
    res.send({ message: "Error " + error });
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length > 0 || null) {
      res.send(products);
    } else {
      res.send({ message: "No products found" });
    }
  } catch (error) {
    res.send({ message: "Error " + error });
  }
};
