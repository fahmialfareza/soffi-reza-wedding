import { Router } from "express";

import GeneratorDelivery from "../delivery/generator";
import { createInvitationValidator } from "../middlewares/generatorValidator";

const path = "/api/v1/invitations";
const router = Router();
const generatorDelivery = new GeneratorDelivery();

router
  .route(path)
  .get(generatorDelivery.getUrls)
  .post(createInvitationValidator, generatorDelivery.createGenerators)
  .delete(generatorDelivery.deleteGenerators);

export default router;
