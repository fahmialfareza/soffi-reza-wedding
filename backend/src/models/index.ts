import mongoose from "mongoose";
import MMessage from "./message";

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI must be defined");
}

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, {
    autoIndex: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err.message));

export const Message = MMessage;
