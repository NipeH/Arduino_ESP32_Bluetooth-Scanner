// Express Framework
const express = require('express')
const app = express()

// CrossOrigin tuki
const cors = require('cors');
app.use(cors());

// Tietosuoja helmet
const helmet = require('helmet');
app.use(helmet());

// Noden portti
const port = 3000
// Aikaleimoja varten date
const date = Date.UTC()

// Tietokanta SQLite, vaihtuu myöhemmin MongoDB
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('data.db');

// Sarjaportin tuki ja lukija
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const { parsers } = require('serialport')

// Tarkista aina oikea Serial portti, baudrate on sama
const serialport2 = new SerialPort('COM3', { baudRate: 9600 })
const parser = new Readline()
serialport2.pipe(parser)

// Serial portin data kirjataan consoliin, kahdella eri tavalla
parser.on('data', line => console.log(`> ${line}`))
//parser.on('data', console.log)

// Jos navigoi selaimella juureen ilmoittaa node viestillä
app.get('/', (req, res) => {
  res.send('Bluetoothin ihmeellinen maailma')
  })

// Jos navigoi localhost:3000/btdata saa JSON vastauksen
app.get('/btdata', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'JSON toimii' })
  });

// Taulukoita varten muistilista: TABLE espData (id INTEGER PRIMARY KEY AUTOINCREMENT, btdata TEXT)

// Kaikki tietokannan data palautetaan JSON muodossa
app.get('/btdata/all', (req, res, next) => {
  db.all("SELECT * FROM espData", (error, results) => {
      if (error) throw error;
  
      return res.status(200).json(results);
    });
  });

app.post('/btdata/add',  (req, res, next) => {

    let tap = req.body;
    let pvm = date;
    
    db.run('INSERT INTO espData (pvm, btdata) VALUES (?, ?)', [pvm, tap.btdata], function (error, result) {
         if (error) throw error;
 
         return res.status(200).json( {count: this.changes} );
    })
})

// Konsoliin ilmoitus kun palvelin toimii
app.listen(port, () => {
  console.log(`NodeJS palvelin toimii osoitteessa http://localhost:${port}`)
})

// Virheellinen osoite antaa viestin.

app.get('*', (req, res, next) => {
  return res.status(404).send({ error: true, message: 'Virheellinen osoite' })
});