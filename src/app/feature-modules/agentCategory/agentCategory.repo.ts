import { agentCategorySchema } from "./agentCategory.schema.js";
import type { AgentCategory, AgentCategoryCreate } from "./agentCategory.types.js";

const create = async (data : AgentCategoryCreate) => agentCategorySchema.create(data);

const removeAgentById = async (agentId: Pick<AgentCategory, "agentId">) => agentCategorySchema.destroy({where: {agentId}});

const countAgentInCategory = async (categoryId: Pick<AgentCategory, "categoryId">) => agentCategorySchema.count({where: {categoryId}});

export default {
    create,
    removeAgentById,
    countAgentInCategory
}