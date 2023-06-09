'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use('/', (_, res) => {
    res.statusCode = 200;
    res.send('<h1>hello LGTM</h1>');
});
app.listen(3000);
