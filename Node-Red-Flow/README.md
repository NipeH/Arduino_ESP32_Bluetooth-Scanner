## NODE-RED

Tämä hakee Brokerilta dataa, tällä hetkellä minun brokerilta. Voitte testata jollain muulla, esim 
"/hfp/v2/journey/ongoing/vp/bus/+/+/+/+/+/+/+/+/60;24/28/08/12/#" 
Tuo kysely hakee Huopalahdentieltä liikenteen.
https://www.openstreetmap.org/search?whereami=1&query=60.20109%2C24.88266#map=17/60.20109/24.88266

Eli muokatkaa ensim Brokerin osoite kondikseen.

Seuraavaksi avatkaa tietokanta node ja määrittäkää mihin tallentaa tiedot "hakemisto/tietokanta.db esimerkiksi" (Win,MacOs,Linux hakemistorakentee huomioiden).

Deploy Node

Sitten alkaa erroria tulemaan ensimmäisellä kerralla, mutta kun painatte CREATE TABLE niin error poistuu. 


## Mitä tapahtuu?

Node-Red lukee MQTT datan. Funktio ottaa datan, muokkaa sen tietokannalle sopivaksi, lisää siihen ID, Date, Time. Tämän jälkeen se tallennetaan tietokantaan. 
Jos olet laittanut tietokannan NodeJs hakemistoon muokkaa seuraava kohta tiedoston nimeksi:

const db = new sqlite3.Database('./**TÄMÄ KOHTA MUOKKAA**', (err) => {
    if (err) {
        console.error("Erro opening database " + err.message);
    } else {
        console.log("Database connected.");
           
    }
});

Kun molemmat Node-Red ja NodeJs olevat päällä, voit nähdä kuinka tietokanta paisuu ja tallentaa kaikki haluamasi datan.
