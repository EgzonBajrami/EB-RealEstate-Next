import multer, { StorageEngine } from 'multer';

// Allowed file formats
const allowedFormats: string[] = [
  /* Images */
  'image/jpeg',
  'image/png',
  'image/jpg',
  'image/webp'
];

const storage: StorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/apartments');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

    let extArray = file.mimetype.split('/');
    let extension = extArray[extArray.length - 1];

    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension);
  },
});

const fileFilter = (req: any, file: any, cb: multer.FileFilterCallback) => {
  if (allowedFormats.includes(file.mimetype)) {
    cb(null, true);
  }
};

const limitFileSize = { fileSize: 1024 * 1024 * 5 };

const uploadConfig = { storage, fileFilter, limits: limitFileSize };
const upload = multer(uploadConfig);

export default upload;