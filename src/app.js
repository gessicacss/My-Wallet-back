import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRoute.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use(authRouter);
app.use(userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))