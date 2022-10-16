import { IMessage } from "../interfaces/message.interface";
import { Message } from "../models";

export default class MessageRepository {
  async getMesssages() {
    return Message.find().sort("-createdAt");
  }

  async createMessage(message: IMessage) {
    return Message.create(message);
  }
}
