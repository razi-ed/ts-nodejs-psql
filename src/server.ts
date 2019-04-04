import http from "http";
import express from "express";
import { ApplyMiddleware } from "./utils/apply_middlewares";
import { ApplyRoutes } from "./utils/apply_routes";
import Middleware from "./middleware";
import Routes from './routes'

const router = express();
ApplyMiddleware( Middleware, router );
ApplyRoutes( Routes, router )
const { PORT = 3000 } = process.env;
const server = http.createServer( router );

server.listen(PORT, () =>
  console.log( `Server is running http://localhost:${ PORT }` )
);
