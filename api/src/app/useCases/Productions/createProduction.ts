import { Request, Response } from 'express';

import { Production } from '../../models/Production';

export async function createProduction(req: Request, res: Response) {
  const {
    machine,
    order,
    employee,
    operation,
    quantityProduced,
  } = req.body;

  if (!machine) {
    return res.status(400).json({
      error: 'machine is required',
    });
  }

  if (!operation) {
    return res.status(400).json({
      error: 'operation is required',
    });
  }

  if (!order) {
    return res.status(400).json({
      error: 'order is required',
    });
  }

  if (!employee) {
    return res.status(400).json({
      error: 'employee is required',
    });
  }

  try {
    const production = await Production.create({
      machine,
      order,
      employee,
      operation,
      quantityProduced: Number(quantityProduced),
    });

    res.status(201).json(production);
  } catch (error) {
    // console.log(error);
    res.sendStatus(500);
  }
}
