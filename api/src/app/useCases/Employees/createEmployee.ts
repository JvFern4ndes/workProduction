import { Request, Response } from 'express';

import { Employee } from '../../models/Employee';

export async function createEmployees(req: Request, res: Response) {
  try {
    const {
      name,
      email,
      phone,
      imagePath,
      userName,
      password,
      period
    } = req.body;

    const employee = await Employee.create({
      name,
      email,
      phone,
      imagePath,
      userName,
      password,
      period
    });

    res.status(201).json(employee);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
