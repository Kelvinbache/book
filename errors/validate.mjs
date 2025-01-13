import { string, z } from "zod";

class Book {
  validate() {
    return function (req, res, next) {
     
     const { name, description } = req.body;

      const book = z.object({
        name: z.string(),
        description: string(),
      });

      const response = book.safeParse({ name: name, description: description });
    

      if (!response.success) {
    
        res.status(406).json({ message: response.error.format().name._errors[0] });
     
      } else {
    
         next();
   
     }
    
    };
  }
}

const validateBook = new Book();

export { validateBook };
