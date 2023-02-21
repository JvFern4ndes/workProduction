import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const {
      status,
      client,
      details,
    } = req.body;

    if (!status) {
      return res.status(400).json({
        error: 'status is required',
      });
    }

    if (!client) {
      return res.status(400).json({
        error: 'client is required',
      });
    }

    if (!details) {
      return res.status(400).json({
        error: 'details is required',
      });
    }

    const order = await Order.create({
      status,
      client,
      details,
    });

    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
