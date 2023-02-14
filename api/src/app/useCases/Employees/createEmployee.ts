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

    if (!name) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    if (!userName) {
      return res.status(400).json({
        error: 'userName is required',
      });
    }

    if (!password) {
      return res.status(400).json({
        error: 'password is required',
      });
    }

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
