function hello(req, res, next) {
    res.status(200).send('hello');
}

module.exports = hello;
