import { Request, Response, NextFunction } from "express";
import fileUpload from "express-fileupload";
import readXlsxFile from "read-excel-file/node";

import GeneratorService from "../services/generator";
import { IResponse } from "../interfaces/response.interface";

export default class GeneratorDelivery {
  public generatorService = new GeneratorService();

  public getUrls = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.generatorService.getURLs();

      const response: IResponse = {
        data,
        status: 200,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public deleteGenerators = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await this.generatorService.deleteGenerators();

      const response: IResponse = {
        data: null,
        status: 200,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public createGenerators = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const body = req.files;
      const file = body!.file as fileUpload.UploadedFile;

      const generators = await readXlsxFile(Buffer.from(file.data));
      const newGenerators: string[] = [];

      for (const generator of generators) {
        newGenerators.push(generator[0] as string);
      }

      const data = await this.generatorService.createGenerators(newGenerators);

      const response: IResponse = {
        data,
        status: 200,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}
