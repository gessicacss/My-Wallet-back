import db from "../database/database.connection.js";
import bcrypt from "bcrypt";
import formatDate from "../utils/formatDate.js";

export async function postTransactions(req, res){
    const {description, amount} = req.body;
    const {type} = req.params;
    const date = formatDate();
    const {userId} = res.locals.session;
    try {
        await db.collection('transactions').insertOne({userId, description, type, amount, date })
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getTransactions(req, res){
    const {userId} = res.locals.session;
    try {
        const transactions = await db.collection('transactions').find({userId}).toArray();
        res.send(transactions);
    } catch (err) {
        res.status(500).send(err.message);
    }
}