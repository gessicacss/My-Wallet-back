import db from "../database/database.connection.js";
import formatDate from "../utils/formatDate.js";

export async function postTransactions(req, res){
    const {description, amount} = req.body;
    const {type} = req.params;
    const date = formatDate();
    const {userId} = res.locals.session;
    if (type !== "saida" && type !== "entrada") return res.status(422).send("Esse tipo é inválido");
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

export async function deleteTransaction(req, res){
    const { id } = req.params;

    try {
        const transaction = await db.collection('transactions').findOne({_id: new ObjectId(id)});
        if (!transaction){
            return res.status(404).send("There's no transaction with this id!");
        }
        await db.collection('transactions').deleteOne({_id: new ObjectId(id)});
        res.sendStatus(202);
    } catch(err){
        res.status(500).send(err.message);
    }
}