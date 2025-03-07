const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Hospital = sequelize.define('Hospital', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Hospital;
};