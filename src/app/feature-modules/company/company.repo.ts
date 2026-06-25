import type { Transaction } from "sequelize";
import type { Company } from "./company.types.js";
import { companySchema } from "./company.schema.js";

const createCompany = (company: Omit<Company, "id">) => companySchema.create(company);

const findOneCompany = (name: string) => companySchema.findOne({where: {name: name}})

const findById = (company: Partial<Company>) => companySchema.findOne({where: {id: company}})

const findAllCompany = () => companySchema.findAll();

const updateCompany = (id: Pick<Company, "id">, company: Pick<Company, "name">) => companySchema.update(company, {where : {id}})

const deleteCompany = (companyId: Pick<Company, "id">) => companySchema.destroy({where: {id: companyId}})

export default {
    createCompany,
    findOneCompany,
    findAllCompany,
    updateCompany,
    deleteCompany,
    findById
}

