import { IGenerator, InvitationType } from "../interfaces/generator.interface";
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

  async copy(id: string, type: InvitationType) {
    let copied = {};

    if (type === InvitationType.Resepsi) {
      copied = { copiedResepsi: true };
    } else if (type === InvitationType.Unduh) {
      copied = { copiedUnduh: true };
    } else if (type === InvitationType.ResepsiUnduh) {
      copied = { copiedResepsiUnduh: true };
    }

    return Generator.updateOne({ _id: id }, copied);
  }
}
