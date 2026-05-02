import { Router, type IRouter } from "express";
import healthRouter from "./health";
import uploadRouter from "./upload";
import chatRouter from "./chat";

const router: IRouter = Router();

router.use(healthRouter);
router.use(uploadRouter);
router.use(chatRouter);

export default router;
