import type { Transaction } from "sequelize";
import { hashPassword } from "../../utilities/hash.password.js";
import type { authUser } from "../auth/auth.types.js";
import userRepo from "./user.repo.js";
import { UserResponse } from "./user.response.js";
import { Role, type Query, type UpdateUser, type User } from "./user.types.js";



const create = async (user: Omit<User, "id">, transaction?: Transaction) => {
    try {
        const password = user.password;
        const hashedPassword = await hashPassword(password)
        user.password = hashedPassword
        // console.log(".............................", user)
        await userRepo.create(user, transaction);
        return UserResponse.USER_CREATED
    } catch (e) {
        throw e
    }
}

const findOne = async (user: Partial<User>) => {
    try {
        return await userRepo.findOne(user);
    } catch (e) {
        throw UserResponse.USER_NOT_FOUND;
    }
}

const getProfileData = async (user: Partial<User>) => {
    try {
        const data = await userRepo.findOne(user);
        return data?.toSafeJson();
    } catch (e) {
        throw UserResponse.USER_NOT_FOUND;
    }
}

const findAll = async (query?: Query) => {
    try {
        const users = await userRepo.findAll(query);
        return users.map(user => user.toSafeJson());
    } catch (e) { 
        throw e 
    }
}

const findById = async (id: string) => {
    try {
        const user = await userRepo.findOne({ id })
        if (!user) throw UserResponse.USER_NOT_FOUND;
        return user;
    } catch (e) {
        throw e
    }
}

const updateUser = async (user: authUser, id: string, data: UpdateUser) => {
    try {
        if(Object.keys(data).length === 0) {
            return
        }
        await userRepo.updateUser(id, data)
        return UserResponse.USER_UPDATED_SUCCESSFULLY;
    } catch (e) {
        throw e
    }
}

const deleteUser = async (user: authUser,id: string) => {
    try {
        await userRepo.deleteUser(user.id);
        return UserResponse.USER_DELETED_SUCCESSFULLY;
    } catch (e) { throw e }
}
export default {
    create, findOne, findAll, findById, updateUser, deleteUser, getProfileData
}