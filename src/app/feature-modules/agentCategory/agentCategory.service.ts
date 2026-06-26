import categoriesService from "../categories/categories.service.js";
import userService from "../user/user.service.js";
import agentCategoryRepo from "./agentCategory.repo.js";
import { agentCategoryResponse } from "./agentCategory.response.js";
import type { AgentCategory, AgentCategoryCreate } from "./agentCategory.types.js";

const assignCategory = async (companyId: string, agentId: string, data: AgentCategoryCreate) => {
    try {
        const agent = await userService.findOne({companyId, id: agentId});
        if(!agent) throw agentCategoryResponse.AGENT_NOT_FOUND;

        const category = await categoriesService.getOneCategory(companyId, data.categoryId);
        if(!category) throw agentCategoryResponse.CATEGORY_NOT_FOUND;

        const newAssignment = {
            agentId,
            categoryId: data.categoryId
        }
        const existing = await agentCategoryRepo.findAgentById(agentId);
        if(existing) {
            await agentCategoryRepo.removeAgentById(agentId)
            await agentCategoryRepo.create(newAssignment);
            return agentCategoryResponse.AGENT_REASSIGNED_SUCCESSFULLY;
        }

        await agentCategoryRepo.create(newAssignment);
        return agentCategoryResponse.AGENT_ASSIGNED_SUCCESSFULLY;
    } catch (error) {
        throw error
    }
}

const removeCategory = async (companyId: string, agentId: string) => {
    try {
        const agent = await userService.findOne({companyId, id: agentId})
        if(!agent) throw agentCategoryResponse.AGENT_NOT_FOUND;

        const existing = await agentCategoryRepo.findAgentById(agentId);
        if(!existing) throw agentCategoryResponse.AGENT_HAS_NO_CATEGORY;

        await agentCategoryRepo.removeAgentById(agentId);
        return agentCategoryResponse.UNASSIGNED_SUCCESSFULLY;
    } catch (error) {
        throw error;
    }
}

const findAll = async (categoryId: string) => {
    try {
        return await agentCategoryRepo.findAll(categoryId);
    } catch (error) {
        throw error;
    }
}
export default{
    assignCategory,
    removeCategory,
    findAll
}