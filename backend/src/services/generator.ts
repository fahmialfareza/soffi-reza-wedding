import { IGenerator, InvitationType } from "../interfaces/generator.interface";
import GeneratorRepository from "../repository/generator";

export default class GeneratorService {
  public generatorRepository = new GeneratorRepository();

  async getURLs() {
    let urls = await this.generatorRepository.getURLsCache();
    if (!urls) {
      urls = await this.generatorRepository.getURLs();
      this.generatorRepository.setURLsCache(urls);
    }

    return urls;
  }

  async findByName(name: string) {
    const generators = await this.generatorRepository.findByName(name);

    return generators;
  }

  async deleteGenerators() {
    const deletedGenerators = await this.generatorRepository.deleteGenerators();
    this.generatorRepository.deleteGeneratorsCache();

    return deletedGenerators;
  }

  async createGenerators(generators: string[]) {
    const newGenerators: IGenerator[] = [];

    for (const generator of generators) {
      if (generator) {
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
    }

    const createdGenerators = await this.generatorRepository.createGenerators(
      newGenerators
    );
    const urls = await this.generatorRepository.getURLs();
    this.generatorRepository.setURLsCache(urls);

    return createdGenerators;
  }

  async copy(id: string, type: InvitationType) {
    const generator = await this.generatorRepository.copy(id, type);
    const urls = await this.generatorRepository.getURLs();
    this.generatorRepository.setURLsCache(urls);

    return generator;
  }
}
