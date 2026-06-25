import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";
import type { TicketPriority, TicketStatus } from "./tickets.types.js";

export class ticketSchema extends Model<InferAttributes<ticketSchema>, InferCreationAttributes<ticketSchema>> {
    declare id: CreationOptional<string>;
    declare companyId: string;
    declare customerId: string;
    declare categoryId: string;
    declare agentId: CreationOptional<string | null>;
    declare subject: string;
    declare description: string;
    declare status: CreationOptional<TicketStatus>;
    declare priority: CreationOptional<TicketPriority>;
    declare rating: CreationOptional<number | null>;
}

ticketSchema.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    companyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'companies',
            key: "id"
        }
    },
    customerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
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
    agentId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: "users",
            key: "id"
        }
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
    }
}, {
    sequelize,
    tableName: "tickets",
    timestamps: false, 
})