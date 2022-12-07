// import { NextApiRequest, NextApiResponse } from "next";
import Database from "@database/db";

export default async function getAvocadoById(req, res) {
    const db = new Database();
    const avocadoId = req.query.id;
    const avocado = await db.getById(avocadoId);
    if (avocado) res.json(avocado);
    else res.status(404).json({ statusText: "Product Not Found" });
}
