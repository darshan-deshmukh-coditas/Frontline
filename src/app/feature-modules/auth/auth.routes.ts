import { factoryRouter } from "../../routes/router.js";
import { Route } from "../../routes/routes.types.js";
import { ResponseHandler } from "../../utilities/response.handler.js";
import { body } from "../../utilities/validate.js";
import { Role } from "../user/user.types.js";
import authService from "./auth.service.js";
import { ZUserLogin, ZUserRegister } from "./auth.types.js";

const router = factoryRouter();

router.Public().post("/login", body(ZUserLogin) ,async (req, res, next) => {
  try {
    const {accessToken, refreshToken, ...data } = await authService.login(req.body);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: "strict",
    });
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

router.Public().post("/register", body(ZUserRegister), async (req, res, next) => {
  try {
    const result = await authService.register(req.body, req?.user)
    res.send(new ResponseHandler(result))
  } catch (error) {
    throw error
  }
})

export default new Route("/auth", router.newRouter);
