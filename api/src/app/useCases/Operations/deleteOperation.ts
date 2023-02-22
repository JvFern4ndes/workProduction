import { Request, Response } from 'express';

import { Operation } from '../../models/Operation';

export async function deleteOperation(req: Request, res: Response) {
  try {
    const { operationId } = req.params;

    await Operation.findByIdAndDelete(operationId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
