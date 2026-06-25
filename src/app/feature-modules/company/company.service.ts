import type { Transaction } from "sequelize";
import companyRepo from "./company.repo.js";
import { companyResponse } from "./company.response.js";
import type { Company, CompanyCreate } from "./company.types.js";
import { sequelize } from "../../connections/pg.connection.js";
import authService from "../auth/auth.service.js";
import { Role } from "../user/user.types.js";
import type { authUser } from "../auth/auth.types.js";
import { authResponse } from "../auth/auth.response.js";

const createCompany = async(data: CompanyCreate, authUser: authUser) => {
    try {
        console.log(data.companyName)
        const companyExists = await companyRepo.findOneCompany(data.companyName);
        if(companyExists) throw companyResponse.COMPANY_ALREADY_EXISTS;
        // await sequelize.transaction(async (transaction: Transaction) => {
            const {id, ...company} = await companyRepo.createCompany( {name: data.companyName});
            await authService.register({name: data.adminName, email: data.adminEmail, password: data.adminPassword, role: Role.companyAdmin, companyId: id}, authUser)
        // });
        return companyResponse.COMPANY_CREATED_SUCCESSFULLY
    } catch (error) {
        throw error;
    }
} 

const updateCompany = async(id: any, company: Pick<Company, "name">, authUser: authUser) => {
    try {
        const companyExists = await companyRepo.findById(id)
        if(!companyExists) throw companyResponse.COMPANY_NOT_FOUND;
        console.log(id, company)
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
        const companyData = await companyRepo.findById(company);
        return companyData;
    } catch (error) {
        throw error
    }
}

const deleteCompany = async (companyId: Pick<Company, "id">) => {
    try {
        const companyExists = await companyRepo.findById(companyId);
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