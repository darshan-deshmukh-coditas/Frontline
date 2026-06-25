import { authResponse } from "../auth/auth.response.js";
import categoryRepo from "./categories.repo.js";
import { categoryResponse } from "./categories.responses.js";
import type {
  Category,
  CategoryCreate,
  CategoryUpdate,
} from "./categories.types.js";

const createCategory = async (companyId: string, data: CategoryCreate) => {
  try {
    const findCategory = {companyId, ...data}
    const categoryExists = await categoryRepo.findOneCategory(findCategory);
    if (categoryExists.length !== 0) throw categoryResponse.CATEGORY_ALREADY_EXISTS;
    const category = await categoryRepo.createCategory({ ...data, companyId });
    return categoryResponse.CATEGORY_CREATED_SUCCESSFULLY;
  } catch (error) {
    throw error;
  }
};

const getAllCategories = async (companyId: Pick<Category, "companyId">) => {
  try {
    return await categoryRepo.findAllCategories(companyId);
  } catch (error) {
    throw error;
  }
};

const getOneCategory = async (companyId: string, id: string) => {
  try {
    if(companyId !== id ) throw authResponse.UNAUTHORIZED;
    const category = await categoryRepo.findById({ id, companyId });
    if (!category) throw categoryResponse.CATEGORY_NOT_FOUND;
    return category;
  } catch (error) {
    throw error;
  }
};

const updateCategory = async ( companyId: string, id: string, newCategory: Pick<Category, "name">) => {
  try {
    if(companyId !== id ) throw authResponse.UNAUTHORIZED;
    const category = await categoryRepo.findById({ id, companyId });
    if (!category) throw categoryResponse.CATEGORY_NOT_FOUND;

    if (newCategory.name) {
        const duplicate = await categoryRepo.findOneCategory({name: newCategory.name, companyId});
        if (duplicate.length !== 0) throw categoryResponse.CATEGORY_ALREADY_EXISTS;
    }
    const result = await categoryRepo.updateCategory(id,companyId, newCategory.name as any);
    console.log(result)
    return categoryResponse.CATEGORY_UPDATED_SUCCESSFULLY;
  } catch (error) {
    throw error;
  }
};


const deleteCategory = async (companyId: string, id: string) => {
  try {
    if(companyId !== id ) throw authResponse.UNAUTHORIZED;
    const category = await categoryRepo.findById({ id, companyId });
    if (!category) throw categoryResponse.CATEGORY_NOT_FOUND;

    // const agentCount = await categoryRepo.countAgentsInCategory(id);
    // if (agentCount > 0) throw categoryResponse.CATEGORY_HAS_AGENTS_ASSIGNED;
    await categoryRepo.deleteCategory(id);
    return categoryResponse.CATEGORY_DELETED_SUCCESSFULLY;
  } catch (error) {
    throw error;
  }
};

export default {
  createCategory,
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
};
