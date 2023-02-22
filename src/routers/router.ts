import { Router } from "express";
import { producrRouter } from "./product-router";
const router = Router();

router.use("/", producrRouter);

export { router };
