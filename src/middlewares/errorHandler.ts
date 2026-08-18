//Express usa para un middleware de errores y no una ruta normal
import type { ErrorRequestHandler } from "express";
import { NotFoundError } from "../errors/NotFoundError.js";

const DEFAULT_ERROR_MESSAGE = "An error has ocurred on the server";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof NotFoundError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  console.error(err);
  res.status(500).json({ message: DEFAULT_ERROR_MESSAGE });
};