import { Request, Response } from 'express';

import { Item } from '../../models/Item';

export async function listItems(req: Request, res: Response) {
  try {
    const items = await Item.find();

    res.json(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
