import { Request, Response } from 'express';

import { Production } from '../../models/Production';

export async function changeProductionPropertiesValues(req: Request, res: Response) {
  try {
    const { productionId } = req.params;
    const { operation, quantityProduced, details } = req.body;

    if (!['cnc', 'serra', 'preparation', 'machining'].includes(operation)) {
      return res.status(400).json({
        error: 'Operation should be one of these: cnc, serra, preparation, machining.'
      });
    }

    await Production.findByIdAndUpdate(productionId, { operation, quantityProduced, details });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
