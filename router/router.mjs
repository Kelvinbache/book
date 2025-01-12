import { Router } from "express";
import { methodGet } from "./get.mjs";
import { methodPost } from "./post.mjs";

class Routers {
  constructor() {
    this.router = Router();
    this.responseGet = methodGet.response();
    this.responsePost = methodPost.response();
  }

  methodGet() {
    return this.router.get("/", this.responseGet);
  }

  methodPost() {
    return this.router.post("/", this.responsePost);
  }
}

const router = new Routers();

export { router };
