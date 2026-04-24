const express = require('express');
const app = express();
const cors = require('cors');
const signupMain = require('../Src/Routes/index'); // ✅ fix

app.use(cors());          // ✅ correct
app.use(express.json());  // ✅ correct

app.use('/api', signupMain);

module.exports = app;