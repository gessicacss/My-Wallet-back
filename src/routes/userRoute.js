import { Router } from "express";
import { authValidation } from "../middlewares/auth.middleware.js";
import { getTransactions, postTransactions } from "../controllers/user.controllers.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import postTransactionsSchema from "../schemas/postTransactionsSchema.js";

const userRouter = Router();
userRouter.use(authValidation);
userRouter.post("/post-transactions/:type", validateSchema(postTransactionsSchema), postTransactions);
userRouter.get("/post-transactions/", getTransactions);

export default userRouter;