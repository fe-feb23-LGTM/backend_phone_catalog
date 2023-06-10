const { Sequelize } = require('sequelize');

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// const URI = `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`;
const URI = 'postgres://anastasiia.yuzyfyshyn.ki.2020:MlFYvUo12XCx@ep-delicate-morning-258831.eu-central-1.aws.neon.tech/neondb';

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