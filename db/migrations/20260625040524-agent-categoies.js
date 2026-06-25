"use strict";

import { DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("agent_categories", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn("uuidv4"),
      },

      agentId: {
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
        onDelete: "CASCADE",
      },
    });
    await queryInterface.addConstraint("agent_categories", {
      fields: ["agentId"],
      type: "unique",
      name: "per_agent_one_categories",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("agent_categories");
  },
};