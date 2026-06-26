import z from "zod";

export const ZAgentCategory = z.object({
    id: z.uuid(),
    agentId: z.uuid(),
    categoryId: z.uuid(),
})

export const ZAgentCategoryCreate = z.object({
    agentId: z.uuid(),
    categoryId: z.uuid()
})

export const ZAssignCategory = z.object({
    categoryId: z.uuid(),
})

export type AssignCategory = z.infer<typeof ZAssignCategory>;
export type AgentCategory = z.infer<typeof ZAgentCategory>;
export type AgentCategoryCreate = z.infer<typeof ZAgentCategoryCreate>;