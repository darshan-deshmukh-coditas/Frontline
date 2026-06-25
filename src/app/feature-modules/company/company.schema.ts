import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";

export class companySchema extends Model<InferAttributes<companySchema>, InferCreationAttributes<companySchema>> {
    declare id: CreationOptional<string>;
    declare name: string;
}

companySchema.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: sequelize.fn('uuidv4')
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "companies",
    timestamps: false
})