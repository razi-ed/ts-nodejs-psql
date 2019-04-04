import { Request, Response, NextFunction } from "express";

import HelloWorldService, { Greeting } from '../../controllers/hello_world'
import {
  ValidateGreetingQueryParams,
  ValidateGreetingParams,
  ValidateBodyName
} from "../../middlewares/request_validations";

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
    path: "/api/v1",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const response = HelloWorldService();
        res.send(response);
      }
    ]
  },
  {
    path: "/api/v1",
    method: "post",
    handler:[
      ValidateBodyName,
      async (req: Request, res: Response) => {
        const response = Greeting( req.body.name );;
        res.send(response);
      }
    ]
  },
  {
    path: "/api/v1/greeting",
    method: "get",
    handler: [
      ValidateGreetingQueryParams,
      async (req: Request, res: Response) => {
        const response = Greeting( req.query.name );
        res.send(response);
      }
    ]
  },
  {
    path: "/api/v1/greeting/:adjective",
    method: "get",
    handler: [
      ValidateGreetingParams,
      async (req: Request, res: Response) => {
        const response = Greeting( req.params.adjective );
        res.send(response);
      }
    ]
  }
];

export default Routes;