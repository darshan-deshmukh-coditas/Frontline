import { factoryRouter } from "../../routes/router.js";
import { Route } from "../../routes/routes.types.js";
import { ResponseHandler } from "../../utilities/response.handler.js";
import { body } from "../../utilities/validate.js";
import { Role } from "../user/user.types.js";
import companyService from "./company.service.js";
import { ZCompany, ZCompanyCreate, ZCompanyUpdate, type Company } from "./company.types.js";

const router = factoryRouter();

router.post("/create", [Role.superAdmin], body(ZCompanyCreate), async (req, res, next) => {
    try {
        const companyCreated = await companyService.createCompany(req.body);
        res.send(new ResponseHandler(companyCreated))
    } catch (error) {
        next(error)
    }
})

router.patch("/:id", [Role.superAdmin], body(ZCompanyUpdate), async (req, res, next) => { 
    try {
        const companyUpdated = await companyService.updateCompany(req.params.id as any, req.body)
        res.send(new ResponseHandler(companyUpdated))
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", [Role.superAdmin], async (req, res, next) => {
    try {
        const companyDeleted = await companyService.deleteCompany(req.params.id as any);
        res.send(new ResponseHandler(companyDeleted))
    } catch (error) {
        next(error)
    }
})

router.get("/allCompanies", [Role.superAdmin], async(req, res, next) => {
    try {
        const companyData = await companyService.getAllCompany();
        res.send(new ResponseHandler(companyData))
    } catch (error) {
        next(error)
    }
})

router.get("/:id", [Role.superAdmin], async(req, res, next) => {
    try {
        const companyData = await companyService.getOneCompany(req.params.is as any);
        res.send(new ResponseHandler(companyData));
    } catch (error) {
        next(error)
    }
})

export default new Route("/company", router.newRouter)