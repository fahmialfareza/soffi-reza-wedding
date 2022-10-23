import { NextFunction, Request, Response } from "express";

import { IMessage } from "../interfaces/message.interface";

export const createMessageValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body as IMessage;
    const errorMessages: string[] = [];

    if (!body.name) {
      errorMessages.push("Nama harus diisi!");
    }

    if (!body.message) {
      errorMessages.push("Pesan harus diisi!");
    }

    if (errorMessages.length > 0) {
      return next({ messages: errorMessages, statusCode: 400 });
    }

    next();
  } catch (error) {
    next(error);
  }
};
