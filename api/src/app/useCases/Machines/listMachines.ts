import { Request, Response } from 'express';

import { Machine } from '../../models/Machine';

export async function listMachines(req: Request, res: Response) {
  try {
    const machines = await Machine.find();

    res.json(machines);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
