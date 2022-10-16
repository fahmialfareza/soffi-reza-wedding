import { IMessage } from "./message.interface";

export interface IServerToClientEvents {
  message: (message: IMessage) => void;
}

export interface IClientToServerEvents {
  message: (message: string) => void;
}

export interface IInterServerEvents {
  ping: () => void;
}

export interface ISocketData {
  name: string;
  age: number;
}
