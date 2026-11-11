const express = require('express');
const app = express();
const port = 3000;

// Rute pertama
app.get('/', (req, res) => {
  res.send('Selamat datang di aplikasi Express!');
});

// Rute kedua
app.get('/about', (req, res) => {
  res.send('Tentang kami');
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});