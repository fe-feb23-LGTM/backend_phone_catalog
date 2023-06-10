import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
dotenv.config();


const dbUrl = process.env.DB_URL
const URI = `${dbUrl}`;

export const dbInit = () => {
  const db = new Sequelize(
    URI,
    {
      dialectOptions: {
        ssl: true,
      },
    }
  );

  return db;
};