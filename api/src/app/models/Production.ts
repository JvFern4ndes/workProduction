import { model, Schema } from 'mongoose';

export const Production = model('Production', new Schema({
  machine: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Machine',
  },
  order: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Order',
  },
  employee: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Employee',
  },
  operation: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Operation',
  },
  quantityProduced: {
    type: Number,
    required: true,
  },
  startedAt: {
    type: Date,
    default: Date.now,
  },
  finishedAt: {
    type: Date,
    default: Date.now,
  }
}));
