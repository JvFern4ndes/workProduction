import { model, Schema } from 'mongoose';

export const Item = model('Item', new Schema({
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
  },
  measures: {
    required: true,
    type: [{
      name: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    }],
  },
  client: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Client',
  },
}));
