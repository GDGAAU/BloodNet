const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DonationHistory = sequelize.define('DonationHistory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    donationTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    donorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Donors',
        key: 'id',
      },
    },
    hospitalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Hospitals',
        key: 'id',
      },
    },
  });

  return DonationHistory;
};