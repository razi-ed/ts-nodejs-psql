import Express from "express";

import { Common, Routes } from "../middlewares";
import { ApplyMiddlewares } from "./apply_middlewares";
import { ApplyRoutes } from "./apply_routes";

const Router = Express();
ApplyMiddlewares( Common, Router );
ApplyRoutes( Routes, Router )

export default Router;