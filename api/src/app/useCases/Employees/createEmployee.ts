import { Request, Response } from 'express';

import { Employee } from '../../models/Employee';

export async function createEmployees(req: Request, res: Response) {
  const { name, userName, password } = req.body;

  const employee = await Employee.create({ name, userName, password });

  res.json(employee);
}
