import type { Transaction } from "sequelize";
import type { Company } from "./company.types.js";
import { companySchema } from "./company.schema.js";

const createCompany = (company: Omit<Company, "id">, transaction: Transaction) => companySchema.create(company, {transaction});

const findOneCompany = (company: Partial<Company>) => companySchema.findOne({where: company})

const findAllCompany = () => companySchema.findAll();

const updateCompany = (id: Pick<Company, "id">, company: Pick<Company, "name">) => companySchema.update(company, {where : {id}})

const deleteCompany = (companyId: Pick<Company, "id">) => companySchema.destroy({where: companyId})

export default {
    createCompany,
    findOneCompany,
    findAllCompany,
    updateCompany,
    deleteCompany
}

