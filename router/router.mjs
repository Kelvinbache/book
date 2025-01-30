import { Router } from "express";
import { methodGet } from "./get.mjs";
import { methodPost } from "./post.mjs";
import { validateBook } from "../errors/validate.mjs";
import { uploads} from "../middleware/drive_file.mjs"

class Routers {
  constructor() {
    this.router = Router();
    this.responseGet = methodGet.response();
    this.responsePost = methodPost.response();
    this.validateBook = validateBook.validate();
    this.upload = uploads.single("file");
  }

  methodGet() {
    return this.router.get("/",this.responseGet);
  }

  methodPost() {
    return this.router.post("/AddBook", this.upload, this.responsePost);
  }
}

const router = new Routers();

export { router };
