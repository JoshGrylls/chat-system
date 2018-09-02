const express = require('express');
const path = require('path');
const app = express();

//getting out POSTS routes
const posts  = require('./server/routes/posts');


app.use(express.static(path.join(__dirname, 'dist/chat-system')));
app.use('/posts', posts);

//catch all other routes requests and return it to the index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname), 'dist/chat-system/index.html')
});

const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
  console.log('running');
});
