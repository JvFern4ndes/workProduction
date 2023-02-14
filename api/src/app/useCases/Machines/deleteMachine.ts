import { Request, Response } from 'express';

import { Machine } from '../../models/Machine';

export async function deleteMachine(req: Request, res: Response) {
  try {
    const { machineId } = req.params;

    await Machine.findByIdAndDelete(machineId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
