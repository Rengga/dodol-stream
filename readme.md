````markdown
# 🎬 Stream Reaction Overlay

Project sederhana untuk menampilkan gambar reaction ke OBS menggunakan WebSocket.

---

## 🚀 Setup Project

### 1️⃣ Inisialisasi Project (jika belum ada package.json)

```bash
npm init -y
```
````

### 2️⃣ Install Dependencies

Install manual:

```bash
npm install express ws multer
```

Atau jika sudah ada `package.json`:

```bash
npm install
```

---

## ▶️ Menjalankan Server

```bash
node server.js
```

Server akan berjalan di:

```
http://localhost:3000
```

---

## 🖥️ Akses Halaman

### 🎥 Overlay untuk OBS

Gunakan URL ini di OBS (Browser Source):

```
http://localhost:3000/overlay.html
```

---

### 🎛️ Panel Tombol Reaction

Buka di browser:

```
http://localhost:3000/chat.html
```

Digunakan untuk:

- Upload gambar
- Klik gambar untuk tampil di overlay
- Hapus gambar

---

## 📦 Dependencies

- express
- ws (WebSocket)
- multer (upload handler)

---

## 📁 Catatan

- Jalankan `npm install` setiap selesai clone project.
- Folder `node_modules` tidak perlu di-push ke Git.
- Folder `assets` digunakan untuk menyimpan gambar upload.

---

Happy Streaming 🎮🔥

```

---

Kalau kamu mau, aku bisa bikin versi yang lebih profesional untuk GitHub (pakai badge, struktur folder, dan screenshot section).
```

```

```
