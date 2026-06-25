import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";

export class agentCategorySchema extends Model<InferAttributes<agentCategorySchema>, InferCreationAttributes<agentCategorySchema>> {
    declare id: CreationOptional<string>;
    declare agentId: string;
    declare categoryId: string;
}

agentCategorySchema.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    agentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        }
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "categories",
            key: "id"
        }
    },
}, {
    sequelize,
    tableName: "agent_categories",
    timestamps: false,
})