module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Donors', [
      {
        name: 'John Doe',
        bloodType: 'A+',
        phone: '+1234567890',
        location: 'New York',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        bloodType: 'B+',
        phone: '+0987654321',
        location: 'Los Angeles',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Donors', null, {});
  },
};