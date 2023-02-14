import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function listClients(req: Request, res: Response) {
  try {
    const clients = await Client.find();

    res.json(clients);
  } catch {
    res.sendStatus(500);
  }
}
