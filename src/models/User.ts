import { Model, DataTypes } from 'sequelize';
import { dbInit } from '../dbInit';

const sequelize = dbInit();

interface UserAttributes {
  email: string;
  password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public email!: string;
  public password!: string;
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export { User };
