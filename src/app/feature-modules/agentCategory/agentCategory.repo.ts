import { agentCategorySchema } from "./agentCategory.schema.js";
import type { AgentCategory, AgentCategoryCreate } from "./agentCategory.types.js";

const create = async (data : AgentCategoryCreate) => agentCategorySchema.create(data);

const removeAgentById = async (agentId: string) => agentCategorySchema.destroy({where: {agentId}});

const countAgentInCategory = async (categoryId: Pick<AgentCategory, "categoryId">) => agentCategorySchema.count({where: {categoryId}});

const findAgentById = async(agentId: string) => agentCategorySchema.findOne({where: {agentId}})

const findAll = async(categoryId: string) => agentCategorySchema.findAll({where: {categoryId}})
export default {
    create,
    removeAgentById,
    countAgentInCategory,
    findAgentById,
    findAll
}