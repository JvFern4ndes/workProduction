import { Request, Response } from 'express';

import { Item } from '../../models/Item';

export async function updateItem(req: Request, res: Response) {
  try {
    const { itemId } = req.params;
    const {
      name,
      imagePath,
      measures,
      client,
    } = req.body;

    await Item.findByIdAndUpdate(itemId, {
      name,
      imagePath,
      measures,
      client,
    });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
