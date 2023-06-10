import { dbInit } from '../dbInit';
const { DataTypes } = require('sequelize');
const seq = dbInit();

const User = seq.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
  updatedAt: false,
  createdAt: false,
});

module.exports = { User };