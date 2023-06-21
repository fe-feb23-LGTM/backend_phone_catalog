/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
import { userService } from "../sevices/userService";

const getAll = async (_req: any, res: Response) => {
  console.log('constroller');

  const users = await userService.getAll();

  res.send(users);
};

export const userController = { getAll };
