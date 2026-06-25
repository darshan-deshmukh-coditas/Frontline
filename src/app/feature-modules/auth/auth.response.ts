import { STATUS_CODES } from "node:http";

export const authResponse: Record<
  | "USER_ALREADY_EXISTS"
  | "INVALID_CREDENTIALS"
  | "USER_NOT_FOUND"
  | "UNAUTHORIZED"
  | "No_Token_Found",
  {
    statusCode: number;
    message: string;
  }
> = {
  USER_ALREADY_EXISTS: {
    statusCode: 400,
    message: "User already exists",
  },
  INVALID_CREDENTIALS: {
    statusCode: 404,
    message: "Invalid credentials",
  },
  USER_NOT_FOUND: {
    statusCode: 404,
    message: "User not found",
  },
  UNAUTHORIZED: {
    statusCode: 401,
    message: "Unauthorized request",
  },
  No_Token_Found: {
    statusCode: 500,
    message: "No token found",
  },
};
