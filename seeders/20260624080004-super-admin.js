'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
   await queryInterface.insert(null, 'users', {
    name: 'Darshan',
    email: 'darshan.deshmukh@coditas.com',
    password: '$2a$05$G3E25A3LpgUuGhZmoUM6Ju8T74gcS3EnOztR.Ng.QB924bmgJNbwK',
    role: 'superAdmin',
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', {});
  }
};
