const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");
const multer = require("multer");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "public/assets"));
    },
    filename: function (req, file, cb) {
      const uniqueName = Date.now() + "-" + file.originalname;
      cb(null, uniqueName);
    },
  }),
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    success: true,
    filename: req.file.filename,
  });
});

const fs = require("fs");

const assetsPath = path.join(__dirname, "public/assets");

app.get("/images", (req, res) => {
  fs.readdir(assetsPath, (err, files) => {
    if (err) return res.status(500).json({ error: "Gagal baca folder" });

    const images = files.filter((f) => f.match(/\.(png|jpg|jpeg|gif|webp)$/i));

    res.json(images);
  });
});

app.delete("/images/:name", (req, res) => {
  const filePath = path.join(assetsPath, req.params.name);

  fs.unlink(filePath, (err) => {
    if (err) return res.status(500).json({ error: "Gagal hapus file" });

    res.json({ success: true });
  });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (msg) => {
    console.log("Server received:", msg.toString());

    // Broadcast ke semua client tanpa filter type
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg.toString());
      }
    });
  });
});

server.listen(3000, () => {
  console.log("Server running http://localhost:3000");
});
