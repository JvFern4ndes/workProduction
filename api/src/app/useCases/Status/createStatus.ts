import { Request, Response } from 'express';

import { Status } from '../../models/Status';

export async function createStatus(req: Request, res: Response) {
  try {
    const {
      icon,
      name,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    const status = await Status.create({
      icon,
      name,
    });

    res.status(201).json(status);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
