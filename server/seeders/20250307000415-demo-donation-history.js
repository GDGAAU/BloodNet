module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('DonationHistories', [
      {
        donationTime: new Date(),
        donorId: 1,
        hospitalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        donationTime: new Date(),
        donorId: 2,
        hospitalId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        donationTime: new Date(),
        donorId: 3,
        hospitalId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('DonationHistories', null, {});
  },
};