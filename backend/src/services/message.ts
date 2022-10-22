import { IMessage } from "../interfaces/message.interface";
import MessageRepository from "../repository/message";

export default class MessageService {
  public messageRepository = new MessageRepository();

  async getMesssages() {
    return this.messageRepository.getMesssages();
  }

  async createMessage(message: IMessage) {
    return this.messageRepository.createMessage(message);
  }
}
