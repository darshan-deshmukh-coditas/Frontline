import { type NextFunction, type Request, type Response } from "express";
import { authResponse } from "../feature-modules/auth/auth.response.js";
import { verifyAccessToken, verifyRefreshToken } from "./jwt.helper.js";


export const authMiddleware = (roles: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken = req.headers.authorization?.split(" ")[1]?.toString() || req.cookies.accessToken;
        const refreshToken = req.cookies.refreshToken;
        console.log(accessToken, refreshToken)
        if (!accessToken) throw authResponse.UNAUTHORIZED;

        const {id, role, companyId, ...rest} = verifyAccessToken(accessToken)
        verifyRefreshToken(refreshToken)
        
        req.user = { id, role, companyId};
        console.log(req.user)
        const isAuthorized = roles.includes(req.user.role);
        console.log(roles)
        if(!isAuthorized) throw authResponse.UNAUTHORIZED
        next();
    }
    catch (e) {
        next(e);
    }
}