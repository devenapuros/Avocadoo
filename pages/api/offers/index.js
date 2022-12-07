import Database from "@database/db";

export default async function getAvoOffers(req, res) {
    const db = new Database();
    const allOffers = await db.getOffers();
    res.json(allOffers);
}
