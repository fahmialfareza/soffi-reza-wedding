import { IGenerator } from "../interfaces/generator.interface";
import { Generator } from "../models";

export default class GeneratorRepository {
  async getURLs() {
    return Generator.find().sort("-createdAt");
  }

  async findByName(name: string) {
    return Generator.find({
      name: new RegExp(name, "i"),
    }).sort("-createdAt");
  }

  async createGenerators(generators: IGenerator[]) {
    return Generator.create(generators);
  }

  async deleteGenerators() {
    return Generator.deleteMany({});
  }
}
