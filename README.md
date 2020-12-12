<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/sammusama/Arduino/blob/master">
    <img src="arduino.png" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">Bluetooth scanner</h3>

  <p align="center">
    Bluetooth scanner to collect data from BLE devices nearby. You can use it as a cheap burglar alarm, a bluetooth id scanner or just use it like we did and try to estimate human traffic.
  
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


3. In factory state the ESP32 has limited memory to run program. To allow the bluetooth module use MQTT-libraries, its memory needs to be allocated again.
   
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


### Node-Red / Node-Red-MQTT-SQLITE v 1.0.0

1. Install Node-red: https://nodered.org/#get-started

2. Install new nodes to your Node-Red pallette: Dashboard, Dashboard table and SQlite.

3. Import the flows.json to your Node-Red and check the numbered notes in the flow screen.

4. For more detailed instructions to configure your flows and more documentation, go to: https://github.com/sammusama/Arduino/blob/master/Node-Red-Flow/README.md



<!-- USAGE EXAMPLES -->
## Usage examples

 Bluetooth scanner to collect data from BLE devices nearby. 
 
 This programn can be used to collect data and estimate human traffic inside buildings or on the streets. This can be used by some city to calculate population on certain area or human behavior how they move in the area.

 Program can also be used as a cheap burglar alarm if the burglar has bluetooth connection on in his devices. It can also be used as just a simple id scanner.
 
 





<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->
## Authors

Kasper Toikkanen, Marco Brandt, Sam Kahron, Niilo Hytönen

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

Arduino team logo made by Sam Kahron.


