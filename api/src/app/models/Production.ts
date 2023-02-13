import { model, Schema } from 'mongoose';

export const Production = model('Production', new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Employee',
  },
  operation: {
    type: String,
    enum: ['cnc', 'serra', 'preparation', 'machining'],
    default: 'waiting',
  },
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
  startedAt: {
    type: Date,
    default: Date.now,
  },
  quantityProduced: {
    type: Number,
    required: true,
  },
}));
