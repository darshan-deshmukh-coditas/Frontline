import z from "zod";

export enum TicketStatus  {
    open = "open",
    assigned = "assigned",
    in_progress = "in_progress",
    resolved = "resolved",
};

export enum TicketPriority  {
    normal = "normal",
    high = "high",
    urgent = "urgent",
};

export const ZTicket = z.object({
    id: z.uuid(),
    companyId: z.uuid(),
    customerId: z.uuid(),
    categoryId: z.uuid(),
    agentId: z.uuid().nullable(),
    subject: z.string().min(1),
    description: z.string().min(1),
    status: z.enum(TicketStatus),
    priority: z.enum(TicketPriority),
    rating: z.number().min(1).max(5).nullable(),
})

export const ZTicketCreate = z.object({
    companyId: z.uuid(),
    customerId: z.uuid(),
    categoryId: z.uuid(),
    agentId: z.uuid().nullable(),
    subject: z.string().min(1, "Subject is required."),
    description: z.string().min(1, "Description is required."),
    status: z.enum(TicketStatus)
})

export const ZTicketReassign = z.object({
    agentId: z.uuid(),
})

export const ZTicketPriorityUpdate = z.object({
    priority: z.enum(TicketPriority),
})

export const ZTicketRate = z.object({
    rating: z.number().int().min(1).max(5),
})

export type Ticket = z.infer<typeof ZTicket>
export type TicketCreate = z.infer<typeof ZTicketCreate>
export type TicketReassign = z.infer<typeof ZTicketReassign>
export type TicketPriorityUpdate = z.infer<typeof ZTicketPriorityUpdate>
export type TicketRate = z.infer<typeof ZTicketRate>