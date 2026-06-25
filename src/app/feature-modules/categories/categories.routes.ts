import { factoryRouter } from "../../routes/router.js";
import { Route } from "../../routes/routes.types.js";
import { ResponseHandler } from "../../utilities/response.handler.js";
import { body } from "../../utilities/validate.js";
import { Role } from "../user/user.types.js";
import categoriesService from "./categories.service.js";
import { ZCategoryCreate, ZCategoryUpdate } from "./categories.types.js";

const router = factoryRouter();

router.post("/create", [Role.companyAdmin, Role.companyManager], body(ZCategoryCreate), async(req, res, next) =>{
    try {
        const data = await categoriesService.createCategory(req.user.company_id, req.body);
        res.send(new ResponseHandler(data))
    } catch (error) {
        next(error)
    }
})

router.get("/all", [Role.companyAdmin, Role.companyManager], async(req, res, next) => {
    try {
        const data = await categoriesService.getAllCategories(req.user.company_id as any);
        res.send(new ResponseHandler(data));
    } catch (error) {
        next(error)
    }
})

router.get("/:id", [Role.companyAdmin, Role.companyManager], async(req, res, next) => {
    try {
        const data = await categoriesService.getOneCategory(req.user.company_id as any, req.params.id as any);
        res.send(new ResponseHandler(data));
    } catch (error) {
        next(error)
    }
})

router.patch("/:id", [Role.companyAdmin, Role.companyManager], body(ZCategoryUpdate), async(req, res, next) =>{
    try {
        const data = await categoriesService.updateCategory(req.user.company_id, req.params.id as any, req.body);
        res.send(new ResponseHandler(data))
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", [Role.companyAdmin, Role.companyManager], async(req, res, next) =>{
    try {
        const data = await categoriesService.deleteCategory(req.user.company_id, req.params.id as any);
        res.send(new ResponseHandler(data))
    } catch (error) {
        next(error)
    }
})

export default new Route("/category", router.newRouter)