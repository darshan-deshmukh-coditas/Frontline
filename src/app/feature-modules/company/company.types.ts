import z from "zod";

export const ZCompany = z.object({
    id: z.uuid(),
    name: z.string()
})
export const ZCompanyCreate = z.object({
    companyName: z.string("Company name should be a string"),
    adminName: z.string("Admin name must be a string").min(3),
    adminEmail: z.string("Please enter a valid email-id"),
    adminPassword: z.string("Password must be minimum 8 digit long").min(8)
})

export const ZCompanyUpdate = z.object({
    id: z.uuid().optional(),
    name: z.string().optional()
});

export type Company = z.infer<typeof ZCompany>
export type CompanyCreate = z.infer<typeof ZCompanyCreate>