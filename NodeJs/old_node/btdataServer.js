// Express Framework
// CrossOrigin tuki
// Tietosuoja helmet
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const helmet = require('helmet');
app.use(helmet());

// Noden portti
const port = 3000

// Tietokanta SQLite, vaihtuu myöhemmin MongoDB
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('data.db');

// Sarjaportin tuki ja lukija
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const { parsers } = require('serialport')

// Tarkista aina oikea Serial portti, baudrate on sama
const serialport2 = new SerialPort('COM5', { baudRate: 115200 })
const parser = new Readline(({delimiter: '\r\n'}))
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

// Kaikki tietokannan data palautetaan JSON muodossa, ei vielä käytössä
app.get('/btdata/all', (req, res, next) => {
  db.all("SELECT * FROM espData", (error, results) => {
      if (error) throw error;
  
      return res.status(200).json(results);
    });
  });

// Konsoliin ilmoitus kun palvelin toimii
app.listen(port, () => {
  console.log(`NodeJS palvelin toimii osoitteessa http://localhost:${port}`)
})

// Virheellinen osoite antaa viestin.
app.get('*', (req, res, next) => {
  return res.status(404).send({ error: true, message: 'Virheellinen osoite' })
});