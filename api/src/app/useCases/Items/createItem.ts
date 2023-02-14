import { Request, Response } from 'express';

import { Item } from '../../models/Item';

export async function createItem(req: Request, res: Response) {
  try {
    const {
      name,
      imagePath,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    const item = await Item.create({
      name,
      imagePath,
    });

    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
