import { model, Schema } from 'mongoose';

export const Client = model('Client', new Schema({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}));
