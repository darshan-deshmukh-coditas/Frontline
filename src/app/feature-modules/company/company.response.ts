export const companyResponse: Record<
  | "COMPANY_CREATED_SUCCESSFULLY"
  | "COMPANY_CREATION_FAIL"
  | "COMPANY_UPDATION_FAIL"
  | "COMPANY_UPDATED_SUCCESSFULLY"
  | "COMPANY_ALREADY_EXISTS"
  | "COMPANY_DELETED_SUCCESSFULLY"
  | "COMPANY_NOT_FOUND",
  {
    statusCode: number;
    message: string;
  }
> = {
  COMPANY_CREATED_SUCCESSFULLY: {
    statusCode: 200,
    message: "Company created successfully.",
  },

  COMPANY_CREATION_FAIL: {
    statusCode: 500,
    message: "Company cretion failed",
  },

  COMPANY_UPDATED_SUCCESSFULLY: {
    statusCode: 204,
    message: "Company updated successfully",
  },

  COMPANY_UPDATION_FAIL: {
    statusCode: 500,
    message: "Company updation failed",
  },
  COMPANY_ALREADY_EXISTS: {
    statusCode: 400,
    message: "Company with this name already exists",
  },
  COMPANY_DELETED_SUCCESSFULLY: {
    statusCode: 204,
    message: "Company deleted successfully",
  },
  COMPANY_NOT_FOUND: {
    statusCode: 404,
    message: "Company not found",
  },
};
