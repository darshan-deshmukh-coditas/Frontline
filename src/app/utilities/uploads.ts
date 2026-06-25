import multer from 'multer';
import path from 'node:path';
const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, "./uploads")
    },
    filename(req, file, callback) {
        const name = Date.now() + path.extname(file.originalname)
        callback(null, name)
    },
})

export const upload = multer({storage})