**_NgidolDodol_**

---

Mendukung:

😡 Emotion Overlay

🖼 Reaction Image

🌊 Cinematic Vibe Background

🎤 Live Lyrics System

🌐 WebSocket Realtime

🎥 OBS Production Ready

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

# 😄 Emotion Effect (Fullscreen Effect)

## 🎛️ Control Panel

```
http://localhost:3000/emotionControl.html
```

Fitur:

- Trigger Angry
- Trigger Happy
- Trigger Sad
- Trigger Lazy
- Atur durasi efek

---

## 🎬 Overlay OBS

```
http://localhost:3000/emotionOverlay.html
```

Fungsi:

- Efek fullscreen transparan
- Realtime via WebSocket
- Auto hide sesuai durasi

---

# 🖼️ Reaction Gambar

## 🎛️ Control Panel

```
http://localhost:3000/reactControl.html
```

Fitur:

- Upload gambar ke folder assets
- Klik untuk tampil
- Hapus gambar
- Support GIF

---

## 🎬 Overlay OBS

```
http://localhost:3000/reactOverlay.html
```

Fungsi:

- Menampilkan gambar fullscreen
- Support GIF animasi
- Auto hide sesuai durasi
- Realtime

---

# 🌊🎷🪩 Vibe Background (Cinematic Stage Effect)

## 🎛️ Control Panel

```
http://localhost:3000/vibeControl.html
```

Fitur:

- 🌊 Underwater (gelembung banyak)
- 🤘 Metal Concert (strobe stage)
- 🎷 Jazz Lounge (lampu sorot remang + smoke)
- 🌸 Idol Stage (sparkle particle)

---

## 🎬 Overlay OBS

```
http://localhost:3000/vibeOverlay.html
```

Fungsi:

- Background fullscreen
- Cinematic stage lighting
- Particle animation
- Realtime WebSocket
- Bisa infinite mode

---

🎤 Lyrics Overlay (Live Karaoke Mode)

Fitur untuk menampilkan lirik lagu di OBS secara realtime.

Mendukung:

📋 Copy–paste semua lirik sekaligus

🧹 Auto Clean (hapus [Verse], [Chorus], metadata Genius, dll)

🎚 Pilih 2–4 baris per tampilan

⏭ Tombol Next / Prev

⏹ Clear lirik

🌐 Realtime via WebSocket

🎥 OBS Browser Source Ready

📁 File Tambahan
├── lyricControl.html
├── lyricOverlay.html
🎛️ Control Panel
http://localhost:3000/lyricControl.html

Fitur:

Paste semua lirik dari website (termasuk Genius)

Otomatis menghapus:

[Verse]

[Chorus]

You might also like

Genius Romanizations

Judul lagu / metadata

Pilih jumlah baris per slide (2–4)

Tombol:

▶ Next

◀ Prev

⏹ Clear

🎬 Overlay OBS
http://localhost:3000/lyricsOverlay.html

Fungsi:

Tampilan fullscreen transparan

Animasi fade in

Text shadow cinematic

Realtime update

Cocok untuk live band / karaoke stream

🧠 Cara Kerja

Paste seluruh lirik

System otomatis membersihkan teks non-lirik

Lirik dibagi sesuai jumlah baris per slide

Tekan Next untuk lanjut ke bagian berikutnya

Overlay update secara realtime

🎵 Contoh Input
[Verse 1]
Fukikonda soyokaze ga
Madobe no hana o yurashite

You might also like
Genius Romanizations
🎬 Output di Overlay
Fukikonda soyokaze ga
Madobe no hana o yurashite

Tanpa metadata / promosi.

🔥 Cocok Untuk

🎤 Live cover

🎸 Band session

🎶 Karaoke stream

🎧 Music reaction

🎙 Podcast baca puisi

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
- Multer (file upload)
- Bootstrap 5
- jQuery
- CSS Animation
- OBS Browser Source

---

# 🔥 Tips OBS

Disarankan aktifkan:

- ✔ Shutdown source when not visible
- ✔ Refresh browser when scene becomes active

Resolution disarankan:

- 1920x1080 untuk Emotion & Vibe
- Reaction bebas sesuai kebutuhan

Centang:

- ✔ Transparent Background
