import db from "../database/database.connection.js";
import bcrypt from "bcrypt";
import formatDate from "../utils/formatDate.js";

export async function postTransactions(req, res){
    const {description, amount} = req.body;
    const {type} = req.params;
    const date = formatDate();
    try {
        await db.collection('transactions').insertOne({description, type, amount, date })
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getTransactions(req, res){
    try {
        const transactions = await db.collection('transactions').find().toArray();
        res.send(transactions);
    } catch (err) {
        res.status(500).send(err.message);
    }
}