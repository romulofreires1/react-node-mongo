import mongoose from 'mongoose';

const Stock = mongoose.model(
  'Stock',
  new mongoose.Schema({
    stock: String,
  })
);

export default Stock;
