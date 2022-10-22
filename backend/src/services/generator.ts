import { IGenerator } from "../interfaces/generator.interface";
import GeneratorRepository from "../repository/generator";

export default class GeneratorService {
  public generatorService = new GeneratorRepository();

  async getURLs() {
    return this.generatorService.getURLs();
  }

  async findByName(name: string) {
    return this.generatorService.findByName(name);
  }

  async deleteGenerators() {
    return this.generatorService.deleteGenerators();
  }

  async createGenerators(generators: string[]) {
    const newGenerators: IGenerator[] = [];

    for (const generator of generators) {
      const newGenerator = encodeURIComponent(generator);
      const newURL = `${process.env.URL}/?to=${newGenerator}`;
      newGenerators.push({
        name: generator,
        url: newURL,
        id: 0,
      });
    }

    return this.generatorService.createGenerators(newGenerators);
  }
}
