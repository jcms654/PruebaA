const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors')
require('dotenv').config();
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('port',process.env.PORT || 3000);
app.use(express.static('public'));
app.use(cors())
app.use(require('./routes/index'));
// Start Server
app.listen(app.get('port'), () => {
  console.log('Server listening on port ',app.get('port'));
});