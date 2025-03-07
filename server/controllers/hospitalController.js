const { Hospital } = require('../models');

// Fetch all hospitals
exports.getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.findAll();
    res.status(200).json(hospitals);
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ error: 'Error fetching hospitals' });
  }
};

// Fetch a single hospital by ID
exports.getHospitalById = async (req, res) => {
  const { id } = req.params;

  try {
    const hospital = await Hospital.findByPk(id);
    if (!hospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }
    res.status(200).json(hospital);
  } catch (error) {
    console.error('Error fetching hospital:', error);
    res.status(500).json({ error: 'Error fetching hospital' });
  }
};

// Create a new hospital
exports.createHospital = async (req, res) => {
  const { id, name, location, phone } = req.body;

  if (!id || !name || !location || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hospital = await Hospital.create({ id, name, location, phone });
    res.status(201).json(hospital);
  } catch (error) {
    console.error('Error creating hospital:', error);
    res.status(500).json({ error: 'Error creating hospital' });
  }
};

// Update an existing hospital
exports.updateHospital = async (req, res) => {
  const { id } = req.params;
  const { name, location, phone } = req.body;

  try {
    const hospital = await Hospital.findByPk(id);
    if (!hospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }

    // Update hospital data
    hospital.name = name;
    hospital.location = location;
    hospital.phone = phone;
    await hospital.save();

    res.status(200).json(hospital);
  } catch (error) {
    console.error('Error updating hospital:', error);
    res.status(500).json({ error: 'Error updating hospital' });
  }
};

// Delete a hospital
exports.deleteHospital = async (req, res) => {
  const { id } = req.params;

  try {
    const hospital = await Hospital.findByPk(id);
    if (!hospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }

    await hospital.destroy();
    res.status(204).send(); // No content
  } catch (error) {
    console.error('Error deleting hospital:', error);
    res.status(500).json({ error: 'Error deleting hospital' });
  }
};