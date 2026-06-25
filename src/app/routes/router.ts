import { Router, type IRoute, type RequestHandler, type RouterOptions } from "express";
import { authMiddleware } from "../utilities/auth.middleware.js";
import type { Role } from "../feature-modules/user/user.types.js";

type Fn = {
    (path: string, ...handlers: RequestHandler[]): void;
    (path: string, roles: Role[], ...handlers: RequestHandler[]): void;
};
type method = 'get' | 'post' | 'put' | 'patch' | 'delete'
const methods: method[] = ['get', 'post', 'put', 'patch', 'delete']

type CustomRouterType = {
    get: Fn,
    post: Fn,
    put: Fn,
    patch: Fn,
    delete: Fn,
    Public: () => CustomRouterType,
    newRouter: Router
}

export const factoryRouter = (): CustomRouterType => {
    const router = Router();
    const customeRouter = {} as CustomRouterType
    let isPublic = false
    for (const method of methods) {
        customeRouter[method] = (path: string, rolesOrHandler?: Role[] | RequestHandler, ...handlers: RequestHandler[]) => {
            if (isPublic) {
                isPublic = false
                if (typeof rolesOrHandler === 'function') {
                    router[method](path, rolesOrHandler, ...handlers)
                } else {
                    router[method](path, ...handlers);
                }
                return;
            }
            if (Array.isArray(rolesOrHandler)) {
                router[method](path, authMiddleware(rolesOrHandler), ...handlers)
            } else {
                router[method](path, authMiddleware([]), rolesOrHandler as RequestHandler, ...handlers)
            }
        }
    }
    customeRouter.newRouter = router
    customeRouter.Public = () => {
        isPublic = true;
        return customeRouter
    }
    return customeRouter
}