import type { authUser } from "../auth/auth.types.js";
import categoriesService from "../categories/categories.service.js";
import userService from "../user/user.service.js";
import { Role } from "../user/user.types.js";
import ticketRepo from "./ticket.repo.js";
import { ticketResponse } from "./ticket.response.js";
import { pickAgentForCategory } from "./tickets.assignment.js";
import { TicketPriority, TicketStatus, type TicketCreate } from "./tickets.types.js";

const createTicket = async (authUser:authUser, data: TicketCreate) => {
    try {
        const category = await categoriesService.getOneCategory(authUser.company_id, data.categoryId);
        if(!category) throw ticketResponse.CATEGORY_NOT_FOUND;

        let agentId = await pickAgentForCategory(data.categoryId);
        let status: TicketStatus = TicketStatus.assigned;
        if(!agentId) {
            agentId = null;
            status = TicketStatus.open
        }
        const result = await ticketRepo.create({companyId: authUser.company_id, customerId: authUser.id, agentId, status, ...data})
        return ticketResponse.TICKET_CREATED_SUCCESSFULLY
    } catch (error) {
        throw error;
    }
}

const getTickets = async (authUser: authUser, tickedId: string) => {
    try {
        const ticket = await ticketRepo.findById(tickedId);
        if(!tickedId || ticket?.companyId !== authUser.company_id) throw ticketResponse.TICKET_NOT_FOUND;

        if(authUser.role === Role.customer && ticket.customerId !== authUser.id) throw ticketResponse.NOT_YOUR_TICKET;

        if(authUser.role === Role.companyAgent && ticket.agentId !== authUser.id) throw ticketResponse.NOT_YOUR_TICKET;

        return ticket;
    } catch (error) {
        throw error
    }
}

const listTickets = async (authUser: authUser, status: TicketStatus) => {
    try {
        if(authUser.role === Role.customer) return await ticketRepo.findAll({companyId: authUser.company_id, customerId: authUser.company_id, status});
        
        if(authUser.role === Role.companyAgent) return await ticketRepo.findAll({companyId: authUser.company_id, agentId: authUser.company_id, status});
        
        return await ticketRepo.findAll({companyId: authUser.company_id, status});

    } catch (error) {
        throw error
    }
}

const reassignTicket = async (authUser: authUser, ticketId: any, agentId: any) => {
    try {
        const ticket = await ticketRepo.findById(ticketId);
        if(!ticket || ticket.companyId !== authUser.company_id) throw ticketResponse.TICKET_NOT_FOUND;
        if(ticket.status === TicketStatus.resolved) throw ticketResponse.TICKET_ALREADY_RESOLVED;
        const agent = await userService.findOne(agentId);
        if(!agent) throw ticketResponse.AGENT_NOT_FOUND;

        const previousAgent = ticket.agentId;
        const isSameAgent = previousAgent === agentId;
        if(!isSameAgent) await ticketRepo.updateTicket(ticketId, {...agentId, status: TicketStatus.assigned});

        return ticketResponse.TICKET_REASSIGNED_SUCCESSFULLY
    } catch (error) {
        throw error
    }
}

const rateTicket = async (authUser: authUser, ticketId: string, rating: number) => {
    try {
        const ticket = await ticketRepo.findById(ticketId);
        if(!ticket || ticket?.customerId !== authUser.id) throw ticketResponse.TICKET_NOT_FOUND;

        if(ticket.status !== TicketStatus.resolved) throw ticketResponse.TICKET_NOT_RESOLVED_YET;
        if(ticket.rating !== null) throw ticketResponse.TICKET_ALREADY_RATED

        await ticketRepo.updateTicket(ticketId, {rating})
        return ticketResponse.RATED_SUCCESSFULLY

    } catch (error) {
        throw error
    }
}

const updatePriority = async (authUser:authUser, ticketId: string, priority: TicketPriority) => {
    try {
        const ticket = await ticketRepo.findById(ticketId);
        if (!ticket || ticket.companyId !== authUser.company_id) throw ticketResponse.TICKET_NOT_FOUND;

        await ticketRepo.updateTicket(ticketId, {priority});
        return ticketResponse.PRIORITY_UPDATED_SUCCESSFULLY;
    } catch (error) {
        throw error
    }
}


export default {
    createTicket,
    getTickets,
    listTickets,
    reassignTicket,
    rateTicket,
    updatePriority
}