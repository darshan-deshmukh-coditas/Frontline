import { Model, DataTypes, type InferCreationAttributes, type InferAttributes, type CreationOptional, Sequelize } from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";
import { Role } from "./user.types.js";
import { randomUUID } from "crypto";

export class UserSchema extends Model<InferAttributes<UserSchema>, InferCreationAttributes<UserSchema>> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare companyId: CreationOptional<string>;
    declare role: Role;
    declare passwordVersion: CreationOptional<number>;
    toSafeJson() {
        const { id, password, ...safe } = this.toJSON();
        return safe
    }
}

UserSchema.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.fn('uuidv4'),
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

    role: {
        type: DataTypes.ENUM(
            "superAdmin",
            "companyAdmin",
            "comapnyManager",
            "companyAgent",
            "customer"
        ),
        allowNull: false,
    },

    passwordVersion: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0
    }

}, {
    sequelize,
    tableName: "users",
    timestamps: false,
});