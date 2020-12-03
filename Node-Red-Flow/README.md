## NODE-RED

Asentakaa ensin Node-Red, jonka jälkeen syöttäkää konsoliin: node-red

Node-red käynnistyy, jonka jälkeen voitte oikeasta yläreunasta painaa kolmea viivaa 
- Manage palette: 
-- Hae SQLlite ja asenna.
-- Hae Dashboard ja asenna.

Paina jälleen kolmea viivaa yläreunasta ja paina import. Importtaa tässä kansiossa olevan JSON tiedoston (MQTT_Broker_Database_v*).

Tämä Flow hakee Brokerilta dataa, tällä hetkellä minun brokerilta. Voitte testata jollain muulla, esim 
"/hfp/v2/journey/ongoing/vp/bus/+/+/+/+/+/+/+/+/60;24/28/08/12/#" 
Tuo kysely hakee Huopalahdentieltä liikenteen.
https://www.openstreetmap.org/search?whereami=1&query=60.20109%2C24.88266#map=17/60.20109/24.88266

Eli muokatkaa ensim Brokerin osoite kondikseen.

Seuraavaksi avatkaa tietokanta node ja määrittäkää mihin tallentaa tiedot "hakemisto/tietokanta.db esimerkiksi" (Win,MacOs,Linux hakemistorakentee huomioiden).

Deploy Node oikealta ylhäältä.

Sitten alkaa erroria tulemaan ensimmäisellä kerralla, mutta kun painatte CREATE TABLE niin error poistuu. 


## Mitä tapahtuu?

Node-Red lukee MQTT datan. Funktio ottaa datan, muokkaa sen tietokannalle sopivaksi, lisää siihen ID, Date, Time ja Data MQTT palvelusta. Tämän jälkeen se tallennetaan tietokantaan. 

Node-Red endpointit:
Endpoint | Mitä tekee
------------ | -------------
/data | Hakee kaiken datan, JSON dump
/data/all/count | Laskee tietueiden määrän
/data/all/unique | Hakee uniikit tietueet laite id:n mukaan
/data/all/unique/count | Laskee uniikit tietueet
/data/today |  Hakee kaiken datan tältä päivältä
/data/today/count | Laskee tietueiden määrän tältä päivältä
/data/today/unique | Hakee uniikit tietueet laite id:n mukaan tältä päivältä
/data/today/unique/count | Laskee uniikit tietueet tältä päivältä
/data/week | Hakee kaiken datan tältä viikolta
/data/week/count | Laskee tietueiden määrän tältä viikolta
/data/week/unique | Hakee uniikit tietueet laite id:n mukaan tältä viikolta
/data/week/unique/count | Laskee uniikit tietueet tältä viikolta

