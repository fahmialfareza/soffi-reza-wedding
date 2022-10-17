import { Router } from "express";
import { Routes } from "../interfaces/routes.interface";

import MessageDelivery from "../delivery/message";
import { createMessageValidator } from "../middlewares/messageValidator";

const path = "/api/v1/messages";
const router = Router();
const messageDelivery = new MessageDelivery();

router
  .route(path)
  .get(messageDelivery.getMessages)
  .post(createMessageValidator, messageDelivery.createMessage);

export default router;
