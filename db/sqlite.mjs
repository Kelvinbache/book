import sqlite3 from "sqlite3";

//Address where the table is located
import { cwd } from "process";
import { join } from "path";


// Drive of errs 

import { driveError } from "../errors/driveError.mjs";

/**
 * ! finish the schema base data
 * ? drive the close of db if there is an error
 * ? Open the db
 */

class DBBooks {
  constructor() {
    this.drive = driveError;
    this.db = new sqlite3.Database(join(cwd(), "db", "books.db"), sqlite3.OPEN_READWRITE || sqlite3.OPEN_CREATE || sqlite3.OPEN_FULLMUTEX, this.drive.drive);
  }


 table() {
   
   this.db.run(`DROP TABLE IF EXISTS books`);
 
  //create the table
    this.db.exec(`
     CREATE Table books ( 
      books_id INTEGER PRIMARY KEY AUTOINCREMENT,
      books_name VARCHAR(8) NOT NULL,
      books_description VARCHAR(30) NOT NULL,
      books_file BLOB
      )    
    
    `, this.drive.drive);
    
 }


 insert(name, description) {

  //insert the new data
  const insert = this.db.prepare(`INSERT INTO books (books_name, books_description) VALUES(?,?)`, this.drive.drive);
  insert.run([name,description]);

 }


}

const dbBooks = new DBBooks();

dbBooks.table();

export { dbBooks }

// //? for export 
// dbBooks.insert("the human is good", "the human is good with coffee");
// dbBooks.select();