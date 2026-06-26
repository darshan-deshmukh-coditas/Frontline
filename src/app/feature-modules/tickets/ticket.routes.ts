import { body } from './../../utilities/validate.js';
import { factoryRouter } from "../../routes/router.js";
import { ResponseHandler } from "../../utilities/response.handler.js";
import { Role } from "../user/user.types.js";
import ticketService from "./ticket.service.js";
import { ZTicketCreate } from './tickets.types.js';
import { Route } from '../../routes/routes.types.js';

const router = factoryRouter();

router.post("/create", [Role.customer], body(ZTicketCreate), async(req, res, next)=> {
    try {
        const data = await ticketService.createTicket(req.user, req.body);
        res.send(new ResponseHandler(data))
    } catch (error) {
        next (error)
    }
})

router.get("/all",[Role.companyAdmin, Role.companyAgent, Role.companyManager, Role.customer], async(req, res, next)=> {
    try {
        const result = await ticketService.listTickets(req.user, req.query as any);
        res.send(new ResponseHandler(result));
    } catch (error) {
        next(error)
    }
})

router.get("/:id",[Role.companyAdmin, Role.companyAgent, Role.companyManager, Role.customer], async(req, res, next) => {
    try {
        const result = await ticketService.getTickets(req.user, req.params.id as string);
        res.send(new ResponseHandler(result));
    } catch (error) {
        next(error)
    }
})

router.patch("/:id/reassign", [Role.companyAdmin, Role.companyAgent, Role.companyManager], async(req, res, next)=> {
    try {
        const result = await ticketService.reassignTicket(req.user, req.params.id as string, req.body)
        res.send(new ResponseHandler(result));
    } catch (error) {
        next(error)
    }
})

router.patch(":id/priority", [Role.companyAdmin, Role.companyManager], async(req, res, next) => {
    try {
        const result = await ticketService.updatePriority(req.user, req.params.id as string, req.body);
        res.send(new ResponseHandler(result));
    } catch (error) {
        next(error)
    }
})

router.patch(":id/rate", [Role.customer], async(req, res, next) => {
    try {
        const result = await ticketService.rateTicket(req.user, req.params.id as string, req.body);
        res.send(new ResponseHandler(result));
    } catch (error) {
        next(error)
    }
})

export default new Route("/ticket", router.newRouter);