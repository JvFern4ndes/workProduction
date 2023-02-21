import { model, Schema } from 'mongoose';

export const Status = model('Status', new Schema({
  icon: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
}));
