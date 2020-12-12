<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/sammusama/Arduino/blob/master">
    <img src="arduino.png" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">Bluetooth scanner</h3>

  <p align="center">
    Bluetooth scanner to collect data from BLE devices nearby
  
 
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Project files can be foud here.</strong></a>
    <br />
  </p>
</p>





<!-- ABOUT THE PROJECT -->
## About the project




### Technologies used

* ESP32
* Node
* Node-Red
* MQTT
* ArduinoIDE



<!-- GETTING STARTED -->
## Getting started

These steps will help you to run the project.

### ESP32 Bluetooth module

1. ESP32 programming is done with Arduino IDE using C++. 
   
   Download Arduino IDE  https://www.arduino.cc/en/software


2. Libraries for this project:

   * <BLEDevice.h> (standard library)
   * <BLEUtils.h> (standard library)
   * <BLEScan.h> (standard library)
   * <BLEAdvertisedDevice.h> http://www.neilkolban.com/esp32/docs/cpp_utils/html/files.html
   * <WiFi.h> https://github.com/arduino-libraries/WiFi
   * <PubSubClient.h> https://github.com/knolleary/pubsubclient
   * <Wire.h> (standard library)


3. In factory state the ESP32 has limited memory to run program. To allow the bluetooth module use MQTT-program, its memory needs to be allocated again.
   
   Guide on how to allocate the memory: https://www.youtube.com/watch?v=5VoXNloOwZE

  
   




### Node

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


### Node-Red

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



<!-- USAGE EXAMPLES -->
## Käyttö




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Kaikki projektin koodi on vapaassa käytössä.



