import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/http_errors";

export const ValidateGreetingQueryParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.name) {
    throw new HTTP400Error("Missing name parameter");
  } else {
    next();
  }
};