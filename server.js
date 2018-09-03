const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'dist/chat-system')));

//catch all other routes requests and return it to the index
/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname), 'dist/chat-system/index.html')
});*/

const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
  console.log('running');
});
