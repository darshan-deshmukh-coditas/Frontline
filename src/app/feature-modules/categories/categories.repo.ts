import { categorySchema } from "./categories.schema.js";
import type { Category, CategoryCreate } from "./categories.types.js";

const createCategory = (category: Pick<Category, "name" | "companyId">) => categorySchema.create(category)

const updateCategory = (id: string, companyId: string, name: Pick<Category, "name">) => {
    return categorySchema.update(name, {where: {id}})
}

const deleteCategory = (id: string) => categorySchema.destroy({where : {id}}) ;

const findAllCategories = (companyId: Pick<Category, "companyId">) => categorySchema.findAll({where: {companyId}});

const findOneCategory = (category: Partial<Category>) => {
    return categorySchema.findAll({
    where: {
        name: category.name,
        companyId: category.companyId
    }
})
}

const findById = (category: Partial<Category>) => {
    return categorySchema.findOne({
    where: {
        id: category.id,
        companyId: category.companyId
    }
})
}
// const countAgentsInCategory = (categoryId: string) => agentCategorySchema.count({ where: { categoryId } });

export default{
    createCategory,
    updateCategory,
    deleteCategory,
    findAllCategories,
    findOneCategory,
    findById
    // countAgentsInCategory
}