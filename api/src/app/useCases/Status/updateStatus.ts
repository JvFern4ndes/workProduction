import { Request, Response } from 'express';

import { Status } from '../../models/Status';

export async function updateStatus(req: Request, res: Response) {
  try {
    const { statusId } = req.params;
    const {
      icon,
      name,
    } = req.body;

    await Status.findByIdAndUpdate(statusId, {
      icon,
      name,
    });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
