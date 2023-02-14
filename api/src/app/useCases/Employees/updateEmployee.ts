import { Request, Response } from 'express';

import { Employee } from '../../models/Employee';

export async function updateEmployee(req: Request, res: Response) {
  try {
    const { employeeId } = req.params;
    const {
      name,
      email,
      phone,
      imagePath,
      userName,
      password,
      period,
    } = req.body;

    await Employee.findByIdAndUpdate(employeeId, {
      name,
      email,
      phone,
      imagePath,
      userName,
      password,
      period,
    });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
