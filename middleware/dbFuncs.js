const db = require('../fakePeopleDB.js');

function getAllPeople(req, res, next) {
    res.status(200).json(db);
}

function getById(req, res, next) {
    const id = Number(req.params.id);
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            return res.status(200).json(db[i]);
        }
    }
    res.status(404).send('GHOSTED');
}

module.exports = {
    getAllPeople: getAllPeople,
    getById: getById
};
