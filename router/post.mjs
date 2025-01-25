import { dbBooks } from "../db/sqlite.mjs";

class ResponseMethod {
  response() {
    return function (req, res, next) {

      const { name, description } = req.body;
      
      dbBooks.insert(name, description);

      res.json({message:"send"})
    };
  }
}

const methodPost = new ResponseMethod();

export { methodPost };
