import type { Router } from "express";

export class Route {
    private static RegisteredRoutes : string[] = [];
    constructor(
        public path: string,
        public router: Router
    ){
        if(!(path.startsWith("/"))) throw new Error (`${path} should start with /`);
        if(Route.RegisteredRoutes.includes(path)) throw new Error (`${path} already exists`);
        Route.RegisteredRoutes.push(path);
    }
}

export type Routes = Route[]