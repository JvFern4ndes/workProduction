import { model, Schema } from 'mongoose';

export const Employee = model('Employee', new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  imagePath: {
    type: String,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    enum: ['morning', 'afternoon', 'nightly'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}));
