import { User } from "../models/User";

const getAll = () => User.findAll();

const getByEmail = (email: string) => {
  const user = User.findOne({where: { email }});

  if (!user) {
    return null;
  }

  return user;
};

export const userService = { getAll, getByEmail };
