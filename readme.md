# 🎬 Stream Reaction & Emotion Overlay (OBS + WebSocket)

Project sederhana untuk menampilkan **Reaction Gambar** dan **Emotion Effect Fullscreen** ke OBS menggunakan WebSocket realtime.

Mendukung:

- 🔥 Emotion Effect (Angry, Happy, Sad, Lazy)
- 🖼️ Reaction Gambar Upload
- 🌐 WebSocket Realtime
- 🎥 OBS Browser Source

---

# 📁 Struktur File

```
public/
 ├── emotionControl.html
 ├── emotionOverlay.html
 ├── reactControl.html
 ├── reactOverlay.html
 └── assets/
server.js
```

---

# 🚀 Setup Project

## 1️⃣ Inisialisasi Project (jika belum ada package.json)

```bash
npm init -y
```

---

## 2️⃣ Install Dependencies

Install manual:

```bash
npm install express ws multer
```

Atau jika sudah ada `package.json`:

```bash
npm install
```

---

# ▶️ Menjalankan Server

```bash
node server.js
```

Server berjalan di:

```
http://localhost:3000
```

---

# 🎥 Menggunakan di OBS

Tambahkan **Browser Source** di OBS lalu gunakan URL sesuai fitur.

---

# 😄 Emotion Effect (Full Screen Visual Effect)

## 🎛️ Control Panel

Buka di browser:

```
http://localhost:3000/emotionControl.html
```

Digunakan untuk:

- Trigger Angry
- Trigger Happy
- Trigger Sad
- Trigger Lazy
- Mengatur durasi efek

---

## 🎬 Overlay untuk OBS

Gunakan URL ini di OBS Browser Source:

```
http://localhost:3000/emotionOverlay.html
```

Fungsi:

- Menampilkan efek fullscreen transparan
- Realtime via WebSocket
- Otomatis hilang sesuai durasi

---

# 🖼️ Reaction Gambar

## 🎛️ Control Panel

Buka di browser:

```
http://localhost:3000/reactControl.html
```

Digunakan untuk:

- Upload gambar ke folder assets
- Klik gambar untuk tampil
- Hapus gambar

---

## 🎬 Overlay untuk OBS

Gunakan URL ini di OBS Browser Source:

```
http://localhost:3000/reactOverlay.html
```

Fungsi:

- Menampilkan gambar reaction fullscreen
- Otomatis hilang sesuai durasi
- Realtime via WebSocket

---

# 📦 Assets

Semua gambar reaction disimpan di:

```
public/assets/
```

Pastikan folder ini ada.

Jika menggunakan `.gitignore`, folder ini bisa di-ignore agar tidak ikut terpush.

---

# ⚡ Teknologi yang Digunakan

- Express.js
- WebSocket (ws)
- Multer (upload file)
- jQuery
- CSS Animation
- OBS Browser Source

---

# 🔥 Tips OBS

- Aktifkan:

  - ✔ Shutdown source when not visible
  - ✔ Refresh browser when scene becomes active

- Resolution disarankan:
  - 1920x1080 untuk emotion, untuk react sesuai selera
  - Transparansi aktif

---

# 🎮 Siap Streaming!

Sekarang kamu punya:

- 🎆 Overlay Reaction Gambar
- 😡😄😭😴 Emotion Visual Effect
- ⚡ Realtime via WebSocket
- 🎥 Integrasi OBS

Happy Streaming 🔥🚀
