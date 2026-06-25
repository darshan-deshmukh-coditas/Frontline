import z from "zod";

export enum Role {
    superAdmin = "superAdmin", 
    companyAdmin ="companyAdmin",
    companyManager = "companyManager",
    companyAgent = "companyAgent",
    customer = "customer"
}

export const ZUser = z.object({
    id: z.uuid("id must be a valid uuid."),
    name: z.string("Name must be minimum of 3 letters").min(3),
    email: z.email("email must be a valid email-id"),
    password: z.string("Password must be minimum of 8 digits").min(8),
    companyId: z.uuid("Company-id must be a valid UUID"),
    role: z.enum(Role),
    passwordVersion: z.coerce.number("Password version must be a valid number.").optional()
})

export const ZUpdateUser = z.object({
    name: z.string("Name must be minimum of 3 letters").optional(),
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