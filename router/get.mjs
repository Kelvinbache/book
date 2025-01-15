import { dbBooks } from "../db/sqlite.mjs";
import { driveError } from "../errors/driveError.mjs";

class ResponseMethod {
  response() {
    return function (req, res, next) {
      dbBooks.db.all(`SELECT * from books `, function (err, data) {
        if (err) {
          driveError.drive(err);
        } else {
          res.json(data);
        }
      });
    };
  }
}

const methodGet = new ResponseMethod();

export { methodGet };
