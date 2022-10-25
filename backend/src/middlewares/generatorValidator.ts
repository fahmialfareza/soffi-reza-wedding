import { NextFunction, Request, Response } from "express";
import { InvitationType } from "../interfaces/generator.interface";

export const createInvitationValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.files;

    const errorMessages: string[] = [];

    if (!body?.file) {
      errorMessages.push("File harus ada!");
    }

    if (errorMessages.length > 0) {
      return next({ messages: errorMessages, statusCode: 400 });
    }

    next();
  } catch (error) {
    next(error);
  }
};

export const copyInvitationValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.params;
    const body = req.body;

    const errorMessages: string[] = [];

    if (!params?.id) {
      errorMessages.push("File harus ada!");
    }

    if (!body.type) {
      errorMessages.push("Type harus ada!");
    }

    if (errorMessages.length > 0) {
      return next({ messages: errorMessages, statusCode: 400 });
    }

    if (
      body.type === InvitationType.Resepsi ||
      body.type === InvitationType.ResepsiUnduh ||
      body.type === InvitationType.Unduh
    ) {
      return next();
    }

    errorMessages.push("Type tidak valid!");

    return next({ messages: errorMessages, statusCode: 400 });
  } catch (error) {
    next(error);
  }
};
