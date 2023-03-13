import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import { Employee } from '../../models/Employee';

export async function Authentication(req: Request, res: Response) {
  try {
    const { userName, password } = req.body;

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

    const [user] = await Employee.find({userName});

    if (!user) {
      throw new Error('user not found');
    }

    if (user.password !== password) {
      throw new Error('password does not match with this user');
    }

    res.status(201).json({
      user,
      token: jwt.sign(user, 'PRIVATEKEY'),
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
