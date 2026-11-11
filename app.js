const express = require("express");
const app = express();

// Middleware wajib di paling atas setelah inisialisasi app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== Aktivitas 1 – Routing Dasar =====
app.get("/", (req, res) => {
  res.send("Halaman Utama");
});

app.get("/about", (req, res) => {
  res.send("Halaman Tentang Kami");
});

app.get("/contact", (req, res) => {
  res.send("Hubungi Kami di routing-app");
});

// ===== Aktivitas 2 – Parameter Dinamis =====
app.get("/produk/:kode", (req, res) => {
  res.send("Produk dengan kode: " + req.params.kode);
});

// ===== Aktivitas 3 – Simulasi CRUD Routing =====
// Rute POST /users (sudah digabung agar bisa baca body name & email)
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    res.send(`User ${name} dengan email ${email} berhasil ditambahkan!`);
  } else {
    res.send("Tambah data user baru");
  }
});

app.put("/users/:id", (req, res) => {
  res.send("Update data user dengan ID: " + req.params.id);
});

app.delete("/users/:id", (req, res) => {
  res.send("Hapus user dengan ID: " + req.params.id);
});

// Jalankan Server
app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));