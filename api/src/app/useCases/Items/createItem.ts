import { Request, Response } from 'express';

import { Item } from '../../models/Item';

export async function createItem(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const {
      name,
      measures,
      client,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    if (!measures) {
      return res.status(400).json({
        error: 'measures is required',
      });
    }

    if (!client) {
      return res.status(400).json({
        error: 'client is required',
      });
    }

    const item = await Item.create({
      name,
      imagePath,
      measures: measures ? JSON.parse(measures) : [],
      client,
    });

    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
