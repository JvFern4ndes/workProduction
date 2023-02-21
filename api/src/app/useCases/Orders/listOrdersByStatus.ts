import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrdersByStatus(req: Request, res: Response) {
  try {
    const {statusId} = req.params;

    const orders = await Order.find().where('status').equals(statusId)
      .populate('status')
      .populate('details.item')
      .populate('client');

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
