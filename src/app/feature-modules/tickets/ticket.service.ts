import ticketRepo from "./ticket.repo.js";
import { ticketResponse } from "./ticket.response.js";
import type { TicketCreate } from "./tickets.types.js";

const createTicket = async (data: TicketCreate) => {
    try {
        const result = await ticketRepo.create(data)
        return ticketResponse.TICKET_CREATED_SUCCESSFULLY
    } catch (error) {
        throw error;
    }
}

export default {
    createTicket
}