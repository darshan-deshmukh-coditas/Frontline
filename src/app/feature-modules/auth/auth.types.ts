import z from "zod";
import { ZUser } from "../user/user.types.js";

export const ZUserRegister = ZUser.omit({
    id: true,
})


export const ZUserLogin = ZUser.pick({
    email: true,
    password: true
})

export type userRegister = z.infer<typeof ZUserRegister>;
export type userLogin = z.infer<typeof ZUserLogin>;