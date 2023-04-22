import { Router } from "express";
import { authValidation } from "../middlewares/auth.middleware.js";
import { getTransactions, postTransactions } from "../controllers/user.controllers.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import postTransactionsSchema from "../schemas/postTransactionsSchema.js";

const userRouter = Router();
userRouter.post("/post-transactions/:type", authValidation, validateSchema(postTransactionsSchema), postTransactions);
userRouter.get("/post-transactions/", authValidation, getTransactions);

export default userRouter;