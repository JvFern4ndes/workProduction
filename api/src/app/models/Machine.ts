import { model, Schema } from 'mongoose';

export const Machine = model('Machine', new Schema({
  name: {
    type: String,
    required: true,
  },
}));
