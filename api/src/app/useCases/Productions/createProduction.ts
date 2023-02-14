import { Request, Response } from 'express';

import { Production } from '../../models/Production';

export async function createProduction(req: Request, res: Response) {
  try {
    const {
      operation,
      quantityProduced,
      details,
    } = req.body;

    if (!['cnc', 'serra', 'preparation', 'machining'].includes(operation)) {
      return res.status(400).json({
        error: 'Operation should be one of these: cnc, serra, preparation, machining.'
      });
    }

    const production = await Production.create({
      operation,
      quantityProduced: Number(quantityProduced),
      details,
    });

    res.status(201).json(production);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
