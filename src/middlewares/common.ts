import { Router } from "express";
import Cors from "cors";
import Parser from "body-parser";
import Compression from "compression";

import ApiDocs from '../middlewares/api_docs'

export const HandleCors = (router: Router) =>
  router.use(Cors({ credentials: true, origin: true }));

export const HandleBodyRequestParsing = (router: Router) => {
  router.use(Parser.urlencoded({ extended: true }));
  router.use(Parser.json());
};

export const HandleCompression = (router: Router) => {
  router.use(Compression());
};

export default [
  HandleCors,
  HandleBodyRequestParsing,
  HandleCompression,
  ApiDocs
];
