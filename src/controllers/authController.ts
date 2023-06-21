import { Request, Response } from 'express';
import { User } from '../models/User';

async function register(req: Request, res: Response) {
  const {email, password} = req.body;
  console.log(email, password, 'email, password')
  try {
    const user = await User.create({ email, password })
    res.send(user);
  } catch (error) {
    console.log(error, 'error XXXXXXXXXXXX')
    res.status(500).send('Error creating user');

  }
}

export const authController = {  register };