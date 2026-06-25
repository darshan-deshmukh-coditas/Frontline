import type { Transaction } from "sequelize";
import { Op } from "sequelize";
import { ticketSchema } from "./tickets.schema.js";
import type { TicketCreate, TicketStatus } from "./tickets.types.js";

const create = async (data: TicketCreate) => await ticketSchema.create(data)

export default {
    create
    
}