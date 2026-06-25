import z from "zod";
import { ZUser } from "../user/user.types.js";

export const ZCompany = z.object({
    id: z.uuid(),
    name: z.string()
})

export const ZCompanyAdminCreate = ZUser.omit({
    id: true,
    passwordVersion: true,
})

export const ZCompanyUpdate = z.object({
    id: z.uuid().optional(),
    name: z.string().optional()
});

export type Company = z.infer<typeof ZCompany>
export type CompanyAdminCreate = z.infer<typeof ZCompanyAdminCreate>