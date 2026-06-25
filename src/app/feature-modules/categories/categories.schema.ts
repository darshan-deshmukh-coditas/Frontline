import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";

export class categorySchema extends Model<InferAttributes<categorySchema>, InferCreationAttributes<categorySchema>> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare companyId: CreationOptional<string>;
}

categorySchema.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    companyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: "companies",
            key: "id"
        }
    },
}, {
    sequelize,
    tableName: "categories",
    timestamps: false,
})