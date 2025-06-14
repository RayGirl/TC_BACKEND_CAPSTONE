import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // Save files in the uploads/ directory
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  }
});

// File filter (optional - allows only certain file types)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf|mp4/;
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  if (allowedTypes.test(ext) && allowedTypes.test(mime)) {
    cb(null, true);
  } else {
    cb(new Error('Only images, videos, or PDFs allowed'));
  }
};

const upload = multer({ storage, fileFilter });

// @route   POST /api/upload
// @desc    Upload a file
router.post('/', upload.single('file'), (req, res) => {
  res.status(200).json({
    message: 'File uploaded successfully',
    filePath: `/uploads/${req.file.filename}`
  });
});

export default router;
