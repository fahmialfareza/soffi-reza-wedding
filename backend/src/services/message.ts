import { IMessage } from "../interfaces/message.interface";
import MessageRepository from "../repository/message";

export default class MessageService {
  public messageRepository = new MessageRepository();

  async getMesssages() {
    let messages = await this.messageRepository.getMessagesCache();
    if (!messages) {
      messages = await this.messageRepository.getMesssages();
      this.messageRepository.setMessagesCache(messages);
    }

    return messages;
  }

  async createMessage(message: IMessage) {
    const newMessage = await this.messageRepository.createMessage(message);
    const messages = await this.messageRepository.getMesssages();
    this.messageRepository.setMessagesCache(messages);

    return newMessage;
  }
}
