import { Request, Response, NextFunction } from "express";

import HelloWorldService from '../../controllers/hello_world'
import { ValidateGreetingQueryParams } from "../../middlewares/request_validations";

//! write types to *.type.d files
type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

const Routes: Route[] = [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const response = HelloWorldService();
      res.send( response );
    }
  },
  {
    path: "/greeting",
    method: "get",
    handler:[
      ValidateGreetingQueryParams,
      async (req: Request, res: Response) => {
        const response = HelloWorldService();
        res.send( response );
      }
    ]
  },

];

export default Routes;