module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DonationHistories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      donationTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      donorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Donors',
          key: 'id',
        },
      },
      hospitalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Hospitals',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('DonationHistories');
  },
};
