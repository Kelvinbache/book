import { Router } from "express";
import { methodGet } from "./get.mjs";
import { methodPost } from "./post.mjs";
import { validateBook } from "../errors/validate.mjs";

class Routers {
  constructor() {
    this.router = Router();
    this.responseGet = methodGet.response();
    this.responsePost = methodPost.response();
    this.validateBook = validateBook.validate();
  }

  methodGet() {
    return this.router.get("/", this.responseGet);
  }

  methodPost() {
    return this.router.post("/", this.validateBook, this.responsePost);
  }
}

const router = new Routers();

export { router };
