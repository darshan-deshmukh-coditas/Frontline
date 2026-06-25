import express from 'express';
import { connectToPG } from './connections/pg.connection.js';
import { registeredMiddlewares } from './routes/routes.js'
import { env } from "../validate.env.js";
export const startServer = async () => {
    try{
        const app = express();
        await connectToPG();
        registeredMiddlewares(app);
        const PORT = env.PORT
        app.listen(
            PORT,
            ()=>{
                console.log(`Server started at port ${PORT}`)
            }
        )
    }
    catch(e){
        console.log(e);
        process.nextTick(()=> process.exit(1));
    }
}