const express = require('express');
const compression = require('compression');
const path = require('path');

let app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log( 'Production Express server running at localhost:' + PORT );
});
