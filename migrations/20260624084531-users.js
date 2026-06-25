"use strict";

import { DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn("uuidv4"),
      },

      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },

      password: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      role: {
        type: DataTypes.ENUM("superAdmin", "companyAdmin", "companyManager", "companyAgent", "customer"),
        allowNull: false,
      },

      companyId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "companies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      passwordVersion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};

