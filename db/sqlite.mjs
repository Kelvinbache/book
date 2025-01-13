import sqlite3 from "sqlite3"

const sqlite = new sqlite3.Database("/db/books.db", sqlite3.OPEN_READWRITE || sqlite3.OPEN_CREATE, (err)=> {
    if (err) return console.error(err);
    console.log("the base data open")
})


const table = sqlite.exec(`
  CREATE Table books ( 
  books_id INTEGER PRIMARY KEY AUTOINCREMENT,
  books_name VARCHAR(8) NOT NULL,
  books_description VARCHAR(30) NOT NULL
  )    
`)

export { sqlite}

/**
 * ! finish the schema base data 
 * ? Make to the function that go in table 
 * ? Make insert of books 
 * ? make that go base data response by collection  
 */