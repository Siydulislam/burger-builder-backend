const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharing

const app = express();

app.use(express.json());

module.exports = app;