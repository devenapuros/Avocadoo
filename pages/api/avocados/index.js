import Database from "@database/db";

export default async function allAvos(req, res) {
    const db = new Database();
    const avocados = await db.getAll();
    res.json(avocados);
}
