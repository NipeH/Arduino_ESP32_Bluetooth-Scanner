const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db')

db.serialize( () => {

    let sql = "CREATE TABLE IF NOT EXISTS espData (id INTEGER PRIMARY KEY AUTOINCREMENT, pvm TEXT, btdata TEXT)";

    db.run(sql, (err) => {
        if (err) {
          return console.log(err.message);
        }
        console.log("Taulu luotu");
      })
})

db.close();