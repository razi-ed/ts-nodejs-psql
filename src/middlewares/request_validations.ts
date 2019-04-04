import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/http_errors";

export const ValidateGreetingQueryParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.name) {
    throw new HTTP400Error("Missing name query parameter");
  } else {
    next();
  }
};

export const ValidateGreetingParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ( !req.params.adjective ) {
    throw new HTTP400Error("Missing adjective parameter");
  } else {
    next();
  }
};

export const ValidateBodyName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ( !req.body.name ) {
    throw new HTTP400Error("Missing request body");
  } else {
    next();
  }
};