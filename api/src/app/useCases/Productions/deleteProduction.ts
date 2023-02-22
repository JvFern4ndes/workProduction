import { Request, Response } from 'express';

import { Production } from '../../models/Production';

export async function deleteProduction(req: Request, res: Response) {
  try {
    const { productionId } = req.params;

    await Production.findByIdAndDelete(productionId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
