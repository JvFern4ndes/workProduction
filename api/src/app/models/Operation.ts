import { model, Schema } from 'mongoose';

export const Operation = model('Operation', new Schema({
  name: {
    type: String,
    required: true,
  },
}));
