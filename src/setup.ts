import { dbInit } from './dbInit';
import { Phones } from '../src/Models/Phones';
import phones from './phones/phones.json'

const seeedInitialData = async() => {
  await Phones.bulkCreate(phones)
}

const setup = async() => {
  dbInit();

  await Phones.sync({ force: true });

  await seeedInitialData();
};

setup();