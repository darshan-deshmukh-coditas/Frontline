import { Sequelize } from "sequelize";
import { env } from "../../validate.env.js";
export const sequelize = new Sequelize(
    env.DB_NAME,
    env.DB_USER,
    env.DB_PASSWORD, {
        dialect: 'postgres'
    }
)

export const connectToPG = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connected to PG")
    }catch(e){
        console.log("Could not connect")
        throw e
    }
}
