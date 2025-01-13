import { string, z } from "zod";

class Book {
  validate() {
    return function (req, res, next) {
      const { name, description } = req.body;

      const book = z.object({
        name: z.string(),
        description: string(),
      });

      const response = book.parse({ name: name, description: description });
      
      try {
      
        if (response) {
          res.json({ message: response });
      
        } else {
          res.json({ message: response});
        }
      
      } catch (err) {
        res.json({ message: err});
      }

    };
  }
}

const validateBook = new Book();

export { validateBook };
