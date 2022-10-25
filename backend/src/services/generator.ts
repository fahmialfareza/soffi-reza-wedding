import { IGenerator, InvitationType } from "../interfaces/generator.interface";
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
      const newURLResepsi = `${process.env.URL}/?to=${newGenerator}&type=resepsi`;
      const newURLUnduh = `${process.env.URL}/?to=${newGenerator}&type=unduh`;
      const newURLResepsiUnduh = `${process.env.URL}/?to=${newGenerator}&type=resepsiunduh`;
      newGenerators.push({
        copiedResepsi: false,
        copiedUnduh: false,
        copiedResepsiUnduh: false,
        name: generator,
        urlResepsi: newURLResepsi,
        urlUnduh: newURLUnduh,
        urlResepsiUnduh: newURLResepsiUnduh,
        id: 0,
      });
    }

    return this.generatorService.createGenerators(newGenerators);
  }

  async copy(id: string, type: InvitationType) {
    return this.generatorService.copy(id, type);
  }
}
