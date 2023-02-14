import { Request, Response } from 'express';

import { Employee } from '../../models/Employee';

export async function deleteEmployee(req: Request, res: Response) {
  try {
    const { employeeId } = req.params;

    await Employee.findByIdAndDelete(employeeId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
