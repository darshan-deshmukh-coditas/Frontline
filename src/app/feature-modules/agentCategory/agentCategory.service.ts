import userService from "../user/user.service.js";
import { agentCategoryResponse } from "./agentCategory.response.js";
import type { AgentCategory, AgentCategoryCreate } from "./agentCategory.types.js";

const assignCategory = async (companyId: string, data: AgentCategoryCreate) => {
    try {
        const agent = await userService.findOne({companyId, id: data.agentId});
        if(!agent) throw agentCategoryResponse.AGENT_NOT_FOUND
    } catch (error) {
        throw error
    }
}