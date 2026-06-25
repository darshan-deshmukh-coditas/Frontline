import { body } from './../../utilities/validate.js';
import { factoryRouter } from "../../routes/router.js";
import { ResponseHandler } from "../../utilities/response.handler.js";
import { Role } from "../user/user.types.js";
import ticketService from "./ticket.service.js";
import { ZTicketCreate } from './tickets.types.js';

const router = factoryRouter();

router.post("/create", [Role.customer], body(ZTicketCreate), async(req, res, next)=> {
    try {
        const data = await ticketService.createTicket(req.body);
        res.send(new ResponseHandler(data))
    } catch (error) {
        next (error)
    }
})