import { Request, Response } from 'express';

import { Employee } from '../../models/Employee';

export async function listEmployees(req: Request, res: Response) {
  try {
    const employees = await Employee.find();

    res.json(employees);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
