const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// IMAGE
if (file.fieldname === "image") {
  cb(null, "./upload/images");
}

// IMAGE CHECK
if (file.fieldname === "image") {
  if (imageTypes.test(ext)) {
    return cb(null, true);
  }

  return cb(new Error("Faqat jpg jpeg png rasm yuklash mumkin"));
}

// IMAGE API
app.post("/upload-image", upload.array("image"), (req, res) => {
  const images = req.files.map((file) => {
    return `http://localhost:3000/images/${file.filename}`;
  });

  res.status(200).json({
    message: "Rasmlar yuklab olindi",
    data: images,
  });
});
