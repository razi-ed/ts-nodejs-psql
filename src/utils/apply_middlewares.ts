import { Router } from "express";

type Wrapper = (router: Router) => void;

export const ApplyMiddleware = (middleware: Wrapper[], router: Router) => {
  for (const f of middleware) {
    f(router);
  }
};
