import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function createClient(req: Request, res: Response) {
  try {
    const {
      name,
      active,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    const client = await Client.create({
      name,
      active,
    });

    res.status(201).json(client);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
