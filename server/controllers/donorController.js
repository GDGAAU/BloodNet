const { Donor } = require('../models');

exports.getDonors = async (req, res) => {
  try {
    // Fetch all donors from the database
    const donors = await Donor.findAll();
    res.status(200).json(donors);
  } catch (error) {
    console.error('Error fetching donors:', error);
    res.status(500).json({ error: 'Error fetching donors' });
  }
};