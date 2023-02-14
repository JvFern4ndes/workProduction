import { Request, Response } from 'express';

import { Machine } from '../../models/Machine';

export async function updateMachine(req: Request, res: Response) {
  try {
    const { machineId } = req.params;
    const {
      name,
    } = req.body;

    await Machine.findByIdAndUpdate(machineId, {
      name,
    });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
