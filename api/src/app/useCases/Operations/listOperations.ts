import { Request, Response } from 'express';

import { Operation } from '../../models/Operation';

export async function listOperations(req: Request, res: Response) {
  try {
    const operations = await Operation.find();

    res.json(operations);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
