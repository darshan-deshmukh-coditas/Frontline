import z from "zod";

export enum Role {
    superAdmin = "superAdmin", 
    companyAdmin ="companyAdmin",
    companyManager = "companyManager",
    companyAgent = "companyAgent",
    customer = "customer"
}

export interface authUser {
    id: string,
    company_id: string,
    role: string
}


export const ZUser = z.object({
    id: z.uuid("id must be a valid uuid."),
    name: z.string().min(3),
    email: z.email("email must be a valid email-id"),
    password: z.string().min(8),
    companyId: z.uuid(),
    role: z.enum(Role),
    passwordVersion: z.coerce.number("Password version must be a valid number.")
})

export const ZUpdateUser = z.object({
    name: z.string().optional(),
    email: z.email('Please enter valid emailId').optional()
}).strict()


export const ZUserQuery = z.object({
    search: z.string().optional(),
    sortBy: z.string().optional(),
    order: z.enum(["ASC", "DESC"]).optional(),
    limit: z.coerce.number().optional(),
    offset: z.coerce.number().optional()
})



export type UpdateUser = z.infer<typeof ZUpdateUser>
export type User = z.infer<typeof ZUser>;
export type Query = z.infer<typeof ZUserQuery>