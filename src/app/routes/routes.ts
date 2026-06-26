import { json, type Application, type NextFunction, type Request, type Response } from "express";
import { routes } from "./routes.data.js";
import helmet from 'helmet';
// import cors from 'cors'
import { ResponseHandler } from "../utilities/response.handler.js";
import cookieParser from "cookie-parser";

export const registeredMiddlewares = (app: Application) => {
    app.use(helmet());
    app.use(json());
    app.use(cookieParser())
    // app.use(cors());
    for(const route of routes){
        app.use(route.path, route.router)
    };

    app.use((error:any, req: Request, res: Response, next: NextFunction) => {
        console.log(error);
        res.status(error.statusCode || 500). send(new ResponseHandler(null, error))
    })
}

