import { IMessage } from "../interfaces/message.interface";
import { Message } from "../models/mongo";
import redisClient from "../models/redis";
import { messagesKey, redisExpiration } from "./variables";

export default class MessageRepository {
  async getMesssages() {
    const messagesMongo = await Message.find().sort("-createdAt");
    const messages = JSON.parse(JSON.stringify(messagesMongo)) as [IMessage];
    return messages;
  }

  async getMessagesCache() {
    const redis = await redisClient();

    const messagesRedis = await redis.get(messagesKey);
    await redis.disconnect();
    if (!messagesRedis) {
      return null;
    }

    const messages = JSON.parse(messagesRedis) as [IMessage];
    return messages;
  }

  async setMessagesCache(messages: [IMessage]) {
    const redis = await redisClient();
    await redis.set(messagesKey, JSON.stringify(messages), {
      EX: redisExpiration,
    });
    await redis.disconnect();

    return true;
  }

  async createMessage(message: IMessage) {
    const messageMongo = await Message.create(message);
    const newMessage = JSON.parse(JSON.stringify(messageMongo)) as IMessage;
    return newMessage;
  }
}
