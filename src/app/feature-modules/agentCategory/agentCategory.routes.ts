import { body } from './../../utilities/validate.js';
import { factoryRouter } from "../../routes/router.js";
import { Role } from "../user/user.types.js";
import agentCategoryService from "./agentCategory.service.js";
import { ZAssignCategory } from './agentCategory.types.js';
import { ResponseHandler } from '../../utilities/response.handler.js';
import { Route } from '../../routes/routes.types.js';

const router = factoryRouter();

router.patch("/:agentId", [Role.companyAdmin, Role.companyManager], body(ZAssignCategory),async(req, res, next) => {
    try {
        console.log(req.user.company_id, req.params.agentId as any, req.body);
        const result = await agentCategoryService.assignCategory(req.user.company_id, req.params.agentId as string, req.body);
        res.send(new ResponseHandler(result));
    } catch (error) {
        next(error);
    }
})

router.delete("/:agentId", [Role.companyAdmin, Role.companyManager], async(req, res, next)=>{
    try {
        const result = await agentCategoryService.removeCategory(req.user.company_id, req.params.agentId as string);
        res.send(new ResponseHandler(result));
    } catch (error) {
        next(error)
    }
})

export default new Route ("/agent", router.newRouter);
