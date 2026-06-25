import { Op, Transaction, type WhereOptions } from "sequelize";
import type { Query, UpdateUser, User } from "./user.types.js";
import { UserSchema } from "./user.schema.js";

const create = (user: Omit<User, "id">, transaction?: Transaction) => UserSchema.create(user, {transaction: transaction ?? null});

const findOne =  (user: Partial<User>) => UserSchema.findOne({ where: user });

const findAll =  (query?: Partial<Query>) => {
    
    if(!query) {
        return UserSchema.findAll();
    }
    const { search, sortBy = 'name', order = 'ASC', limit = 10, offset = 0} = query
    let where: any = {};
    if (search) {
        where[Op.or] = [
            { name: { [Op.iLike]: `%${search}%` } },
            { email: { [Op.iLike]: `%${search}%` } }
        ]
    }
    return UserSchema.findAll({ where, order: [[sortBy, order]],limit, offset })
}

const updateUser = async (id: string, data: {}) => {
    try{
        await UserSchema.update(data,{where: { id }})
        return findOne({id})
    }catch(e){
        throw e
    }   
}

const deleteUser = (id: string) => UserSchema.destroy({where: { id }});

export default {
    create, findOne, findAll, updateUser, deleteUser
}