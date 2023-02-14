import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  status: {
    type: String,
    enum: ['waiting', 'in_production', 'packaging', 'done'],
    default: 'waiting',
  },
  details: {
    required: true,
    type: [{
      item: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Item',
      },
      amount: {
        type: Number,
        required: true,
      },
      deliveryDate: {
        type: Date,
        required: true,
      },
    }],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}));
