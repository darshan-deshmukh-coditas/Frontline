export const categoryResponse: Record<
  | "CATEGORY_CREATED_SUCCESSFULLY"
  | "CATEGORY_CREATION_FAIL"
  | "CATEGORY_UPDATED_SUCCESSFULLY"
  | "CATEGORY_UPDATION_FAIL"
  | "CATEGORY_ALREADY_EXISTS"
  | "CATEGORY_DELETED_SUCCESSFULLY"
  | "CATEGORY_DELETION_FAIL"
  | "CATEGORY_NOT_FOUND"
  | "CATEGORY_HAS_AGENTS_ASSIGNED",
  {
    statusCode: number;
    message: string;
  }
> = {
  CATEGORY_CREATED_SUCCESSFULLY: {
    statusCode: 200,
    message: "Category created successfully.",
  },
  CATEGORY_CREATION_FAIL: {
    statusCode: 500,
    message: "Category creation failed",
  },
  CATEGORY_UPDATED_SUCCESSFULLY: {
    statusCode: 204,
    message: "Category updated successfully",
  },
  CATEGORY_UPDATION_FAIL: {
    statusCode: 500,
    message: "Category updation failed",
  },
  CATEGORY_ALREADY_EXISTS: {
    statusCode: 400,
    message: "Category with this name already exists",
  },
  CATEGORY_DELETED_SUCCESSFULLY: {
    statusCode: 204,
    message: "Category deleted successfully",
  },
  CATEGORY_DELETION_FAIL: {
    statusCode: 500,
    message: "Category deletion failed",
  },
  CATEGORY_NOT_FOUND: {
    statusCode: 404,
    message: "Category not found",
  },
  CATEGORY_HAS_AGENTS_ASSIGNED: {
    statusCode: 400,
    message: "Cannot delete this category while agents are still assigned to it. Reassign them to a different category first.",
  },
};