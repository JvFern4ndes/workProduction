import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function updateClient(req: Request, res: Response) {
  try {
    const { clientId } = req.params;
    const {
      name,
      active,
    } = req.body;

    await Client.findByIdAndUpdate(clientId, {
      name,
      active,
    });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
