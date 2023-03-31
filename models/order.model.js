import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    gigId: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: false,
    },
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    sellerId: {
      type: String,
      require: true,
    },
    buyerId: {
      type: String,
      require: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Order', orderSchema);
