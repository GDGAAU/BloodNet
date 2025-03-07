// // const express = require('express');
// // const Donor = require('../models/donor.js');
// // const router = express.Router();
// // router.post('/', async (req, res) => {
// //   try {
// //     const donor = await Donor.create(req.body);
// //     res.status(201).json(donor);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // });
// // router.get('/', async (req, res) => {
// //   const donors = await Donor.findAll();
// //   res.json(donors);
// // });
// //const getHospitalById = require('../controllers/hospitalController');
// const express = require('express');
// const { Hospital } = require('../config/database'); // Correct import
// const router = express.Router();

// router.post('/', async (req, res) => {
//   try {
//     const hospital = await Hospital.create(req.body);
//     res.status(201).json(hospital);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const hospiatls = await Hospital.findAll({
//       attributes: ['name', 'location', 'phone', 'HospitalID', 'createdAt', 'updatedAt']});
//     res.json(hospiatls);
//     res.render('reg',{hospiatls})
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Error fetching donors' });
//   }
// });

// // routes/hospitalRoutes.js - Hospital API routes
// const hospitalController = require('../controllers/hospitalController');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// // const Hospital = require('../models/Hospital');
// router.post('/register', async (req, res) => {
//   const { name, phone, location } = req.body;

//   try {
//     // Insert data into the database
//     const donor = await Donor.create({ name, bloodType, phone, location });
//    // res.status(201).send(`Donor registered successfully! ID: ${donor.id}`);
//     res.render('index',{donor})
//   } catch (error) {
//     console.error('Error registering donor:', error);
//     res.status(500).send('Error registering donor');
  
//   }
// });

// router.post('/login',hospitalController.createHospital);
// // router.post('/request-blood', async (req, res) => {
// //   const { bloodType, location } = req.body;
// //   const donors = await Donor.findAll({ where: { bloodType, location } });
// //   res.json({ donors, message: 'Matching donors retrieved successfully' });
// // });



// // router.get('/search', async (req, res) => {
// //   try {
// //     // Fetch donors with blood type B+
// //     const bPositiveDonors = await Donor.findAll({
// //       where: { bloodType: 'B+' },
// //     });

// //     // Render the list of B+ donors
// //     res.render('index', { donors: bPositiveDonors });
// //   } catch (error) {
// //     console.error('Error fetching B+ donors:', error);
// //     res.status(500).send('Error fetching B+ donors');
// //   }
// // });



// // app.get('/search', async (req, res) => {
// //   try {
// //     // Fetch donors with blood type B+
// //     const bPositiveDonors = await Donor.findAll({
// //       where: { bloodType: req.body.bloodType },
// //     });

// //     // Render the list of B+ donors
// //     res.render('index', { donors: bPositiveDonors }); //not mandatorly to index.ejs ,display potential donor
// //   } catch (error) {
// //     console.error('Error fetching B+ donors:', error);
// //     res.status(500).send('Error fetching B+ donors');
// //   }
// // });









// module.exports = router;



const express = require('express');
const {Hospital } = require('../config/database'); // Correct import
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.status(201).json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.findAll();
 res.json(hospitals);
  //  res.render('reg',{hospitals})
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error fetching donors' });
  }
});


router.post('/register', async (req, res) => {
  const { name, phone, location } = req.body;

  try {
    // Insert data into the database
    const hospital = await Hospital.create({ name, phone, location });
   res.status(201).send(`Donor registered successfully! ID: ${hospital.id}`);
   res.json(hospital);
  } catch (error) {
    console.error('Error registering donor:', error);
    res.status(500).send('Error registering donor');
  
  }
});








module.exports = router;