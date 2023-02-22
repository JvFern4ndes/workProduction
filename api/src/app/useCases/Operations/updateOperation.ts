import { Request, Response } from 'express';

import { Operation } from '../../models/Operation';

export async function updateOperation(req: Request, res: Response) {
  try {
    const { operationId } = req.params;
    const {
      name,
    } = req.body;

    await Operation.findByIdAndUpdate(operationId, {
      name,
    });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
