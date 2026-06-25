import { compare } from "bcryptjs";
import userService from "../user/user.service.js";
import { type authUser } from "../user/user.types.js";
import { authResponse } from "./auth.response.js";
import { generateAccessToken, generateRefreshToken } from "../../utilities/jwt.helper.js";
import type { userLogin, userRegister } from "./auth.types.js";

const register = async (newUser: userRegister) => {
  try {
    const userExists = await userService.findOne({ email: newUser.email, companyId: newUser.companyId });
    if (userExists) throw authResponse.USER_ALREADY_EXISTS;
    return await userService.create(newUser);
  } catch (e) {
    throw e;
  }
};

const login = async (credentials: userLogin) => {
  try {
    const user = await userService.findOne({ email: credentials.email });
    if (!user) throw authResponse.USER_NOT_FOUND;
    const didCompare = await compare(credentials.password, user.password);
    if (!didCompare) throw authResponse.INVALID_CREDENTIALS;
    const payload = {
      id: user.id,
      role: user.role,
      companyId: user.companyId
    };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);
    return {
      name: user.name,
      email: user.email,
      accessToken,
      refreshToken
    };
  } catch (e) {
    throw e;
  }
}

export default {
    login, register
}