"use strict";

import { DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tickets", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },

      companyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "companies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      customerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT", 
      },

      agentId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      subject: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM("open", "assigned", "in_progress", "resolved"),
        allowNull: false,
        defaultValue: "open",
      },

      priority: {
        type: DataTypes.ENUM("normal", "high", "urgent"),
        allowNull: false,
        defaultValue: "normal",
      },

      rating: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        validate: {
          min: 1,
          max: 5,
        },
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tickets");
  },
};