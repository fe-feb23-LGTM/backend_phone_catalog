import fs from 'fs';
import path from 'path';
import { PhonesAbout } from '../models/Phones';
// import { dbInit } from './dbInit';
// import { Phones } from './models/Phones';

export const parsePhoneDescriptions = async () => {
  const folderPath = path.join(__dirname, '../../src/phones/phonesAbout');

  try {
    const files = await fs.promises.readdir(folderPath);
    
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      const phoneData = JSON.parse(fileContent);
      // Create or update the corresponding phone record in the database
      await PhonesAbout.upsert(phoneData);
    }

    console.log('Seeding complete.');
  } catch (error) {
    console.error('Error while seeding:', error);
  }
};
