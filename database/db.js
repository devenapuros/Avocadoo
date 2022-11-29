// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
import allData from "./data";

class Database {
    constructor() {}

    async getAll() {
        await randomDelay();
        return allData;
    }

    async getById(id) {
        const entry = allData.find((item) => item.id === id);
        await randomDelay();
        return entry;
    }

    async getOffers() {
        const offers = allData.filter((item) => item.off);
        await randomDelay();
        return offers;
    }
}

// Let's also add a delay to make it a bit closer to reality
const randomDelay = () =>
    new Promise((resolve) => {
        const max = 350;
        const min = 100;
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;

        setTimeout(resolve, delay);
    });

export default Database;
