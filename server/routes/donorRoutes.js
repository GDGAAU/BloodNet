const express = require('express');
const { Donor } = require('../config/database'); // Correct import
const router = express.Router();
const { Op } = require('sequelize');

router.post('/', async (req, res) => {
  try {
    const donor = await Donor.create(req.body);
    res.status(201).json(donor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const donors = await Donor.findAll();
   // res.json(donors);
    res.render('index', { donors });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error fetching donors' });
  }
});


router.post('/register', async (req, res) => {
  const { name, bloodType, phone, location } = req.body;

  try {
    // Insert data into the database
    const donor = await Donor.create({ name, bloodType, phone, location });
   // res.status(201).send(`Donor registered successfully! ID: ${donor.id}`);
    res.render('index',{donor})
  } catch (error) {
    console.error('Error registering donor:', error);
    res.status(500).send('Error registering donor');
  
  }
});



router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { name, bloodType, phone, location } = req.body;
  
    try {
      // Find the donor by ID
      const donor = await Donor.findByPk(id);
      if (!donor) {
        return res.status(404).send('Donor not found');
      }
  
      // Update the donor data
      donor.name = name;
      donor.bloodType = bloodType;
      donor.phone = phone;
      donor.location = location;
      await donor.save();
  
      // Redirect to a success page or display a success message
      res.status(201).send(`Donor update successfully! ID: ${donor.id}`);
    } catch (error) {
      console.error('Error updating donor:', error);
      console.log(error.message)
      res.status(500).send('Error updating donor');
    }
  });

  router.get('/request', async (req, res) => {
    try {
      const date = new Date();
      const threeMonthsAgo = new Date(date.setMonth(date.getMonth() -3));
  
      const donors = await Donor.findAll({
        where: {
          bloodType: req.body.bloodType,
          updatedAt: {
            [Op.lt]: threeMonthsAgo,
          },
        },
      });
  
      // Render the list of B+ donors
     // res.render('index', { donors: bPositiveDonors });
     res.json({ donors, message: 'Matching donors retrieved successfully' });
    } catch (error) {
      console.error('Error fetching B+ donors:', error);
      res.status(500).send('Error fetching B+ donors');
    }
  });

// New route to get the next available donation date for all donors
router.get('/next-donation-date', async (req, res) => {
  try {
    const donors = await Donor.findAll();
    const donorsWithNextDonationDate = donors.map(donor => {
      const lastDonationDate = donor.updatedAt;
      const nextDonationDate = new Date(lastDonationDate);
      nextDonationDate.setMonth(nextDonationDate.getMonth() + 3);
      return {
        id: donor.id,
        name: donor.name,
        bloodType: donor.bloodType,
        phone: donor.phone,
        location: donor.location,
        lastDonationDate,
        nextDonationDate,
      };
    });

    res.json(donorsWithNextDonationDate);
  } catch (error) {
    console.error('Error fetching next donation dates:', error);
    res.status(500).send('Error fetching next donation dates');
  }
});

module.exports = router;