import type { Transaction } from "sequelize";
import companyRepo from "./company.repo.js";
import { companyResponse } from "./company.response.js";
import type { Company, CompanyCreate } from "./company.types.js";
import { sequelize } from "../../connections/pg.connection.js";
import authService from "../auth/auth.service.js";
import { Role } from "../user/user.types.js";

const createCompany = async(data: CompanyCreate) => {
    try {
        const companyExists = await companyRepo.findOneCompany({name: data.companyName});
        if(companyExists) throw companyResponse.COMPANY_ALREADY_EXISTS;
        await sequelize.transaction(async (transaction: Transaction) => {
            const company = await companyRepo.createCompany( {name: data.companyName} , transaction);
            console.log(await getOneCompany({name: company.name}), "..............................................")
            await authService.register({name: data.adminName, email: data.adminEmail, password: data.adminPassword, role: Role.companyAdmin, companyId: company.id}, transaction)
        });
        return companyResponse.COMPANY_CREATED_SUCCESSFULLY
    } catch (error) {
        throw error;
    }
} 

const updateCompany = async(id: Pick<Company, "id">, company: Pick<Company, "name">) => {
    try {
        const companyExists = await companyRepo.findOneCompany(id)
        if(!companyExists) throw companyResponse.COMPANY_NOT_FOUND;
        const updatedCompany = await companyRepo.updateCompany(id, company);
        return companyResponse.COMPANY_UPDATED_SUCCESSFULLY
    } catch (error) {
        throw error
    }
}

const getAllCompany = async () => {
    try {
        const companyData = await companyRepo.findAllCompany();
        return companyData;
    } catch (error) {
        throw error
    }
}

const getOneCompany = async(company: Partial<Company>) => {
    try {
        const companyData = await companyRepo.findOneCompany(company);
        return companyData;
    } catch (error) {
        throw error
    }
}

const deleteCompany = async (companyId: Pick<Company, "id">) => {
    try {
        const companyExists = await companyRepo.findOneCompany(companyId);
        if(!companyExists) throw companyResponse.COMPANY_NOT_FOUND;
        await companyRepo.deleteCompany(companyId);
        return companyResponse.COMPANY_DELETED_SUCCESSFULLY
    } catch (error) {
        throw error;
    }
}

export default{
    createCompany,
    updateCompany,
    deleteCompany,
    getAllCompany,
    getOneCompany,
}