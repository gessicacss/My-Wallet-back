import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { signIn, signUp } from './controllers/usersControllers.js';

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);
try {
  await mongoClient.connect();
  console.log("MongoDB connected!");
} catch (err) {
  console.log(err.message);
}
const db = mongoClient.db();
export default db;

app.post("/sign-up", signUp);
app.post("/sign-in", signIn);

app.listen(5000, () => console.log('rodandooo'))