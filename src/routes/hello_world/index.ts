import { Request, Response } from "express";

import HelloWorldService from '../../controllers/hello_world'

//! write type for 'Routes'
const Routes = [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const response = HelloWorldService();
      res.send( response );
    }
  }
];

export default Routes;