import { model, Schema } from 'mongoose';

export const Production = model('Production', new Schema({
  operation: {
    type: String,
    enum: ['cnc', 'serra', 'preparation', 'machining'],
    default: 'waiting',
  },
  quantityProduced: {
    type: Number,
    required: true,
  },
  details: {
    required: true,
    type: [{
      employee: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Employee',
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
    }]
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
