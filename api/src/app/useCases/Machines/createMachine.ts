import { Request, Response } from 'express';

import { Machine } from '../../models/Machine';

export async function createMachine(req: Request, res: Response) {
  try {
    const {
      name,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    const machine = await Machine.create({
      name,
    });

    res.status(201).json(machine);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
