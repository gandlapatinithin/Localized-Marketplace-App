import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const User = db.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

// Helpers
export const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

export const createUser = async (email, password) => {
  return await User.create({ username: email, email, password });
};

export default User;
