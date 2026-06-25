import { env } from "../../validate.env.js";
import jwt, { type Jwt, type JwtPayload } from 'jsonwebtoken';

export const generateAccessToken = (payload: object) => {
    return jwt.sign(payload, env.ACCESS_SECRET_KEY, {
        expiresIn: `${env.ACCESS_TOKEN_TIME}m`,
        algorithm: 'HS256'
    });
}

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, env.ACCESS_SECRET_KEY, {
        algorithms: ['HS256']
    }) as JwtPayload;
}

export const generateRefreshToken = (payload: object) => {
    return jwt.sign(payload, env.REFRESH_SECRET_KEY, {
        expiresIn: `${env.ACCESS_TOKEN_TIME}d`,
        algorithm: 'HS256'
    });
}

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, env.REFRESH_SECRET_KEY, {
        algorithms: ['HS256']
    }) as JwtPayload;
}