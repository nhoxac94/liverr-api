import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const messageSchema = new Schema(
  {
    ConversationId: {
      type: String,
      require: true,
    },
    UserId: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Message', messageSchema);
