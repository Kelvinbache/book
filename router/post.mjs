import { dbBooks } from "../db/sqlite.mjs";

class ResponseMethod {
  response() {
    return function (req, res, next) {
    
      // const { name, description, file } = req.body;

      // dbBooks.insert(name, description);

      console.log(req.file)
      res.json({ message: req.body });

    };
  }
}

const methodPost = new ResponseMethod();

export { methodPost };
