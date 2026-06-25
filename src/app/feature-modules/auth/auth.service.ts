import { compare } from "bcryptjs";
import userService from "../user/user.service.js";
import { authResponse } from "./auth.response.js";
import { generateAccessToken, generateRefreshToken } from "../../utilities/jwt.helper.js";
import type { authUser, userLogin, userRegister } from "./auth.types.js";
import type { Transaction } from "sequelize";

const register = async (newUser: userRegister, authUser: authUser) => {
  try {
    const userExists = await userService.findOne({email: newUser.email});
    if (userExists) throw authResponse.USER_ALREADY_EXISTS;
    return await userService.create(newUser, authUser);
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
      company_id: user.companyId
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