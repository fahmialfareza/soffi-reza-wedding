import { NextFunction, Request, Response } from "express";

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

    const errorMessages: string[] = [];

    if (!params?.id) {
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
