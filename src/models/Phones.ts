import { dbInit } from '../dbInit';
import { DataType } from 'sequelize-typescript';
const seq = dbInit();

export const Phones = seq.define('User', {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: DataType.STRING,
    allowNull: false,
  },
  phoneId: {
    type: DataType.STRING,
    allowNull: false,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  fullPrice: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataType.INTEGER,
  },
  screen: {
    type: DataType.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataType.STRING,
    allowNull: false,
  },
  color: {
    type: DataType.STRING,
  },
  ram: {
    type: DataType.STRING,
    allowNull: false,
  },
  year: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataType.STRING,
  },
}, {
  tableName: 'phones',
  updatedAt: false,
  createdAt: false,
});