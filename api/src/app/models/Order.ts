import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  client: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Client',
  },
  item: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Item',
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['waiting', 'in_production', 'packaging', 'done'],
    default: 'waiting',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
}));
