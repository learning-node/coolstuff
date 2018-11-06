const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const logRequest = require('./middleware/logRequest.js');
const hello = require('./middleware/hello.js');
const fourOhFour = require('./middleware/404.js');
const dbFuncs = require('./middleware/dbFuncs.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logRequest);

app.get('/', hello);
app.get('/people', dbFuncs.getAllPeople);
app.get('/people/:id', dbFuncs.getById);

app.all('*', fourOhFour);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
