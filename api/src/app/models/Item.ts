import { model, Schema } from 'mongoose';

export const Item = model('Item', new Schema({
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
  }
}));
