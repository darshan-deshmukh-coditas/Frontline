import z from "zod";

export const ZCategory = z.object({
    id: z.uuid(),
    name: z.string(),
    companyId: z.uuid()
})

export const ZCategorySearch = z.object({
    id: z.uuid().nullable(),
    name: z.string().nullable(),
    companyId: z.uuid().nullable()
})


export const ZCategoryCreate = z.object({
    name: z.string().min(3),
})

export const ZCategoryUpdate = z.object({
    name: z.string().min(1, "Category name is required.").optional(),
})

export type Category = z.infer <typeof ZCategory>
export type CategorySearch = z.infer <typeof ZCategorySearch>
export type CategoryCreate = z.infer <typeof ZCategoryCreate>
export type CategoryUpdate = z.infer<typeof ZCategoryUpdate>