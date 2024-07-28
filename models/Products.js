
const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  name: {
    type:String,
    required:true
    },
  description: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['men', 'women', 'unisex'],
    required: true
  },
  company: {
    type: String,
    required: true
  },
  size: {
    type: String,
    enum: ['s', 'm', 'l', 'onesize'],
    required: true
  },
  Image:{
    type:String,
    required: false
  }
});

module.exports = mongoose.model("Product", Product);
