

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Donor, sequelize} = require('./config/database');
const donorRoutes = require('./routes/donorRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');

//const express = require('express');
const path = require('path');
//const { Donor } = require('./config/database');


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;




// Test database
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/hospitals', hospitalRoutes);
app.use('/donors', donorRoutes);

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the registration form
app.get('/', (req, res) => {
  res.render('index');
});

//Routes
// Parse form data
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/register', async (req, res) => {
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


app.post('/edit/:id', async (req, res) => {
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
      res.status(500).send('Error updating donor');
    }
  });

  app.get('/search', async (req, res) => {
    try {
      // Fetch donors with blood type B+
      const bPositiveDonors = await Donor.findAll({
        where: { bloodType: 'B+' },
      });
  
      // Render the list of B+ donors
      res.render('index', { donors: bPositiveDonors });
    } catch (error) {
      console.error('Error fetching B+ donors:', error);
      res.status(500).send('Error fetching B+ donors');
    }
  });


// Start Server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));