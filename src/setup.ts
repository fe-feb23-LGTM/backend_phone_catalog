import { dbInit } from './dbInit';
import { Phones, PhonesAbout } from './models/Phones';
import { parsePhoneDescriptions } from './phones/parseAndAddPhonesAbout';
import phones from './phones/phones.json'

const seeedInitialData = async() => {
  await Phones.bulkCreate(phones)
}

const setup = async() => {
  dbInit();

  await Phones.sync({ force: true });
  await PhonesAbout.sync({ force: true });

  await seeedInitialData();
  await parsePhoneDescriptions();
};

setup();

