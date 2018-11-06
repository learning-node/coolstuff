function fourOhFour(req, res, next) {
    res.status(404).send(`I don't DO ${req.method} ${req.url}`);
}

module.exports = fourOhFour;
