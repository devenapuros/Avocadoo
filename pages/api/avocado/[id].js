// import { NextApiRequest, NextApiResponse } from "next";
import Database from "@database/db";

export default async function getAvocadoById(req, res) {
    const db = new Database();
    // La propiedad <query> no existe en el objecto req por defecto, es un agragado de next para las apis
    const avocadoId = req.query.id;
    const avocado = await db.getById(avocadoId);
    if (avocado) res.json({ data: avocado });
    else res.status(404).json({ statusText: "Product Not Found" });
}
