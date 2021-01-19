import mongoose from 'mongoose';

const Indicator = mongoose.model(
  'Indicator',
  new mongoose.Schema({
    stock: String,
    roe: Number,
  })
);

export default Indicator;
