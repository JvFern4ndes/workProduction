import { Request, Response } from 'express';

import { Operation } from '../../models/Operation';

export async function createOperation(req: Request, res: Response) {
  try {
    const {
      name,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    const operation = await Operation.create({
      name,
    });

    res.status(201).json(operation);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
