import { factoryRouter } from "../../routes/router.js";
import { Route } from "../../routes/routes.types.js";
import { ResponseHandler } from "../../utilities/response.handler.js";
import { body } from "../../utilities/validate.js";
import authService from "./auth.service.js";
import { ZUserLogin } from "./auth.types.js";

const router = factoryRouter();

router.Public().post("/login", body(ZUserLogin) ,async (req, res, next) => {
  try {
    const { refreshToken, ...data } = await authService.login(req.body);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
      sameSite: "strict",
    });
    res.send(new ResponseHandler(data));
  } catch (e) {
    next(e);
  }
});

export default new Route("/auth", router.newRouter);
