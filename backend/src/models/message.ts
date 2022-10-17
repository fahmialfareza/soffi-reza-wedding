import mongoose from "mongoose";

interface MessageAttrs {
  name: string;
  attending: boolean;
  message: string;
}

interface MessageDoc extends mongoose.Document {
  name: string;
  attending: boolean;
  message: string;
}

interface MessageModel extends mongoose.Model<MessageDoc> {
  build(attrs: MessageAttrs): MessageDoc;
}

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    attending: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

messageSchema.statics.build = (attrs: MessageAttrs) => {
  return new Message(attrs);
};

const Message = mongoose.model<MessageDoc, MessageModel>(
  "message",
  messageSchema
);

export default Message;
