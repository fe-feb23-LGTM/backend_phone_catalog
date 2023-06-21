import { dbInit } from './dbInit';
import { User } from './models/User';

const setup = async() => {
  dbInit();
  await User.sync({ force: true });
};

setup();

