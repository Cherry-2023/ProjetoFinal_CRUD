const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(require('./routes.js'));

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
});