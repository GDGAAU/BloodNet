const express = require('express');
const path = require('path');
const { Donor } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Route to render the edit form
app.get('/edit/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch the donor by ID
    const donor = await Donor.findByPk(id);
    if (!donor) {
      return res.status(404).send('Donor not found');
    }

    // Render the edit form with the donor data
    res.render('edit', { donor });
  } catch (error) {
    console.error('Error fetching donor:', error);
    res.status(500).send('Error fetching donor');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Route to handle form submission for updating donor data
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
      res.redirect('/donors');
    } catch (error) {
      console.error('Error updating donor:', error);
      res.status(500).send('Error updating donor');
    }
  });