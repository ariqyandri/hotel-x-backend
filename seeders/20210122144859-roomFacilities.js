"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "roomFacilities",
      [
        {
          roomId: 1,
          facilityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 1,
          facilityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 1,
          facilityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 1,
          facilityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 1,
          facilityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 1,
          facilityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 2,
          facilityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 2,
          facilityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 2,
          facilityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 2,
          facilityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 2,
          facilityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 2,
          facilityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 3,
          facilityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 3,
          facilityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 3,
          facilityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 3,
          facilityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 3,
          facilityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 3,
          facilityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 4,
          facilityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 4,
          facilityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 4,
          facilityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 4,
          facilityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 4,
          facilityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 4,
          facilityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 4,
          facilityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 5,
          facilityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 5,
          facilityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 5,
          facilityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 5,
          facilityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 5,
          facilityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 5,
          facilityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 5,
          facilityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roomFacilities", null, {});
  },
};
