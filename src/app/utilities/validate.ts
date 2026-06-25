import type { NextFunction, Response, Request } from "express";
import type { ZodObject } from "zod";

const check = (type: "body" | "query" | "params") => (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      req[type] = schema.parse(req[type]);
      next();
    } catch (e: any) {
      console.log(e.issues);
      const error: any = {
        statusCode: 500,
        message: "BAD REQUEST",
        error: e.issues[0].message,
      };
      next(error);
    }
  };

export const body = check("body");
export const params = check("params");
export const query = check("query");
