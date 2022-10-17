import { NextFunction, Request, Response } from "express";

import { IResponse } from "../interfaces/response.interface";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.statusCode || 500;
  const response: IResponse = {
    data: null,
    status: status,
    errors: err.messages || [err.message],
  };

  res.status(status).json(response);
};
