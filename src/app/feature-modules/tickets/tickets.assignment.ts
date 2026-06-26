import agentCategoryService from "../agentCategory/agentCategory.service.js"
import ticketRepo from "./ticket.repo.js";
import ticketService from "./ticket.service.js";

export const pickAgentForCategory= async (categoryId: string) => {
    const agents = await agentCategoryService.findAll(categoryId);

    if(agents.length === 0) return null;
    console.log("In agent assignment", agents);
    const ticketLoads = await Promise.all (agents.map(async (agent) => ({
        agentid: agent.agentId,
        ticketLoad: await ticketRepo.activeTicketPerAgent(agent.agentId)
    })))
    console.log(ticketLoads)
    const result = ticketLoads.sort((a,b) => a.ticketLoad - b.ticketLoad);
    console.log(result)
    return ticketLoads[0]?.agentid;
}

