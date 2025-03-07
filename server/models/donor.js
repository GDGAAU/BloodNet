
const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:');
module.exports = (sequelize) => {
  const Donor = sequelize.define('Donor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bloodType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Donor;
};