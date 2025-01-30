import multer from "multer";

const storage = multer.diskStorage({
    destination:function(req, file, cd) {
        cd(null, "../uploads")
    },

    filename:function(req, file,cd) {
        return cd(null, Date.now() + "-" +  file.originalname)
    }
})

const uploads = multer({storage:storage});

export { uploads }