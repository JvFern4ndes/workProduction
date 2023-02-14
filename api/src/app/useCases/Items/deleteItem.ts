import { Request, Response } from 'express';

import { Item } from '../../models/Item';

export async function deleteItem(req: Request, res: Response) {
  try {
    const { itemId } = req.params;

    await Item.findByIdAndDelete(itemId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
