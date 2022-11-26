import { Request, Response, NextFunction } from "express";

import MessageService from "../services/message";
import { IResponse } from "../interfaces/response.interface";
import { IMessage } from "../interfaces/message.interface";

export default class MessageDelivery {
  public messageService = new MessageService();

  public getMessages = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.messageService.getMesssages();

      const response: IResponse = {
        data,
        status: 200,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public createMessage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const message = req.body as IMessage;

      const data = await this.messageService.createMessage(message);

      // socket.io
      req.io?.emit("message", data);

      const response: IResponse = {
        data,
        status: 201,
      };

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };
}
