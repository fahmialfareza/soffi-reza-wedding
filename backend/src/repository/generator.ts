import { IGenerator, InvitationType } from "../interfaces/generator.interface";
import { Generator } from "../models/mongo";
import redisClient from "../models/redis";
import { redisExpiration, urlsKey } from "./variables";

export default class GeneratorRepository {
  async getURLs() {
    const urlsMongo = await Generator.find().sort("-createdAt");
    const urls = JSON.parse(JSON.stringify(urlsMongo)) as [IGenerator];
    return urls;
  }

  async getURLsCache() {
    const redis = await redisClient();

    const urlsRedis = await redis.get(urlsKey);
    if (!urlsRedis) {
      return null;
    }
    await redis.disconnect();

    const urls = JSON.parse(urlsRedis) as [IGenerator];
    return urls;
  }

  async setURLsCache(urls: [IGenerator]) {
    const redis = await redisClient();
    await redis.set(urlsKey, JSON.stringify(urls), {
      EX: redisExpiration,
    });
    await redis.disconnect();

    return true;
  }

  async findByName(name: string) {
    const generatorsMongo = await Generator.find({
      name: new RegExp(name, "i"),
    }).sort("-createdAt");
    const generators = JSON.parse(JSON.stringify(generatorsMongo)) as [
      IGenerator
    ];

    return generators;
  }

  async createGenerators(generators: IGenerator[]) {
    const newGeneratorsMongo = await Generator.create(generators);
    const newGenerators = JSON.parse(JSON.stringify(newGeneratorsMongo)) as [
      IGenerator
    ];

    return newGenerators;
  }

  async deleteGenerators() {
    const deletedGeneratorsMongo = await Generator.deleteMany({});
    const deletedGenerators = JSON.parse(
      JSON.stringify(deletedGeneratorsMongo)
    );

    return deletedGenerators;
  }

  async deleteGeneratorsCache() {
    const redis = await redisClient();
    await redis.del(urlsKey);
    await redis.disconnect();

    return true;
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

    const generatorMongo = await Generator.updateOne({ _id: id }, copied);
    const generator = JSON.parse(JSON.stringify(generatorMongo));

    return generator;
  }
}
