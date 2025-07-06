const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  category: {
    type: String,
    enum: ['Books', 'Pens', 'Notebooks', 'Art Supplies', 'Geometry Box', 'Highlighters', 'Files & Folders', 'Others'],
    required: true
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  imageUrl: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
