import { dbInit } from '../dbInit';
import { DataType } from 'sequelize-typescript';
const seq = dbInit();

export const User = seq.define('User', {
  email: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataType.STRING,
    allowNull: false,
  }
}, {
  tableName: 'users',
});