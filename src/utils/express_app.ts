import Express from "express";

import { Common, Routes } from "../middlewares";
import { ApplyMiddleware } from "./apply_middlewares";
import { ApplyRoutes } from "./apply_routes";

const Router = Express();
ApplyMiddleware( Common, Router );
ApplyRoutes( Routes, Router )

export default Router;