import { Request, Response } from 'express';
import { User } from '../models/User';
import { userService } from '../sevices/userService';

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

async function login(req: Request, res: Response) {
  const {email, password} = req.body;

  try {

    const user = await userService.getByEmail(email);
    
    
    if (user) {
      if (user.password === password) {
        res.status(200).send('correct password');
      }
      res.status(400).send('incorrect password');
    }
    
    res.status(401).send('user not found');
  } catch (err) {
    console.log(err, 'error login')
  }
}

export const authController = {  register, login };