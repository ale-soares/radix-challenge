import fs from "fs";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (_req, file, cb) => {
    const dir = "./resources/static/assets/uploads";

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const csvFilter = (_req: any, file: any, cb: any) => {
  if (!file) {
    cb(`CSV file not uploaded`, false);
  } else if (file.mimetype.includes("csv")) {
    cb(null, true);
  } else {
    cb(`File uploaded needs to be CSV format`, false);
  }
};

export default multer({
  storage: storage,
  fileFilter: csvFilter,
});
