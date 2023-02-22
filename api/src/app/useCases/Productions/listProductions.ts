import { Request, Response } from 'express';

import { Production } from '../../models/Production';

export async function listProductions(req: Request, res: Response) {
  try {
    const productions = await Production.find()
      .sort({ createdAt: 1 })
      .populate('machine')
      .populate('order')
      .populate('operation')
      .populate('employee');

    res.json(productions);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
