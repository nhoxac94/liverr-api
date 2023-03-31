import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const conversationSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
      unique: true,
    },
    sellerId: {
      type: String,
      require: true,
    },
    buyerId: {
      type: String,
      require: true,
    },
    readBySeller: {
      type: Boolean,
      require: true,
    },
    readByBuyer: {
      type: Boolean,
      require: true,
    },
    lastMessage: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Conversation', conversationSchema);
