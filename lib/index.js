const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const nodeCron = require('node-cron');
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`gmail-filter running @ ${PORT}`));
