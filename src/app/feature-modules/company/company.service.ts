import companyRepo from "./company.repo.js";
import { companyResponse } from "./company.response.js";
import { companySchema } from "./company.schema.js";
import type { Company } from "./company.types.js";

const createCompany = async(company: Pick<Company, "name">) => {
    try {
        const companyExists = await companyRepo.findOneCompany(company);
        if(companyExists) throw companyResponse.COMPANY_ALREADY_EXISTS;
        const newCompany = await companyRepo.createCompany(company);
        return companyResponse.COMPANY_CREATED_SUCCESSFULLY;
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