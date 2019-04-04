import { Router } from "express";

type Wrapper = (router: Router) => void;

export const ApplyMiddlewares = (middlewares: Wrapper[], router: Router) => {
  for (const f of middlewares) {
    f(router);
  }
};
