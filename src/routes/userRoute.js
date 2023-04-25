import { Router } from "express";
import { authValidation } from "../middlewares/auth.middleware.js";
import { deleteTransaction, getTransactions, postTransactions } from "../controllers/user.controllers.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import postTransactionsSchema from "../schemas/postTransactionsSchema.js";

const userRouter = Router();
userRouter.use(authValidation);
userRouter.post("/transactions/:type", validateSchema(postTransactionsSchema), postTransactions);
userRouter.get("/transactions/", getTransactions);
userRouter.delete("/transactions/:id", deleteTransaction);

export default userRouter;