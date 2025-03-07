

const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'),
});

// Import models
const Donor = require('../models/donor')(sequelize);
const Hospital = require('../models/Hospital')(sequelize);

// Define associations (if any)
// Donor.belongsTo(Hospital);
// Hospital.hasMany(Donor);

// Export models and sequelize instance
module.exports = {
  sequelize,
  Donor,
  Hospital,
};