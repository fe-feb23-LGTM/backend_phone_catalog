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

export const PhonesAbout = seq.define('PhoneAbout', {
  id: {
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  },
  namespaceId: {
    type: DataType.STRING,
    allowNull: false,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  capacityAvailable: {
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  },
  capacity: {
    type: DataType.STRING,
    allowNull: false,
  },
  priceRegular: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  priceDiscount: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  colorsAvailable: {
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  },
  color: {
    type: DataType.STRING,
    allowNull: false,
  },
  images: {
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  },
  description: {
    type: DataType.JSON,
    allowNull: false,
  },
  screen: {
    type: DataType.STRING,
    allowNull: false,
  },
  resolution: {
    type: DataType.STRING,
  },
  processor: {
    type: DataType.STRING,
  },
  ram: {
    type: DataType.STRING,
    allowNull: false,
  },
  camera: {
    type: DataType.STRING,
  },
  zoom: {
    type: DataType.STRING,
  },
  cell: {
    type: DataType.ARRAY(DataType.STRING),
  },
}, {
  tableName: 'phonesAbout',
  updatedAt: false,
  createdAt: false,
});
