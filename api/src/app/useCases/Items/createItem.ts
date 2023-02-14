import { Request, Response } from 'express';

import { Item } from '../../models/Item';

export async function createItem(req: Request, res: Response) {
  try {
    const {
      name,
      imagePath,
    } = req.body;

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
