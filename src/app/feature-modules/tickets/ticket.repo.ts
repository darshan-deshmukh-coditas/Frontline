import type { Transaction } from "sequelize";
import { Op } from "sequelize";
import { ticketSchema } from "./tickets.schema.js";
import {
    TicketStatus,
  type FilterQueue,
  type Ticket,
  type TicketCreate,
  type UpdateTicket,
} from "./tickets.types.js";

const create = async (data: Omit<Ticket, "id" | "priority" | "rating">) =>
  await ticketSchema.create(data);

const findById = (id: string) => ticketSchema.findOne({ where: { id } });

const findAll = (filter: FilterQueue) => {
  const where: any = { companyId: filter.customerId };
  if (filter.customerId) where.customerId = filter.customerId;
  if (filter.agentId) where.agentId = filter.agentId;
  if (filter.status) where.status = filter.status;
  return ticketSchema.findAll(where);
};

const activeTicketPerAgent = (agentId: string) =>
  ticketSchema.count({ where: [ 
    {agentId}, 
    {status: [TicketStatus.in_progress, TicketStatus.assigned]}
    ] 
    });

const updateTicket = (id: string, data: Partial<UpdateTicket>) =>
  ticketSchema.update(data, { where: { id } });

export default {
  create,
  findById,
  findAll,
  activeTicketPerAgent,
  updateTicket,
};
