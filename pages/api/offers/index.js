import Database from "@database/db";

export default async function getAvoOffers(req, res) {
    const db = new Database();
    const allEntries = await db.getOffers();
    const dataLength = allEntries.length;
    res.json({ data: allEntries, length: dataLength });
}
