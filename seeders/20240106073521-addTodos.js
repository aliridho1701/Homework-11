'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Todos', [
        {
          title: 'belajar sequelize',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Bang Messi',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Todos, null, {}')
  }
};
