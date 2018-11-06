function logRequest(req, res, next) {
    console.log(`Got ${req.method} request to ${req.url}`);
    next();
}

module.exports = logRequest;
