import Database from "../../../database/db";

export default async function allAvos(req, res) {
    const db = new Database();
    const allEntries = await db.getAll();
    const dataLength = allEntries.length;
    res.json({ data: allEntries, length: dataLength });
}
