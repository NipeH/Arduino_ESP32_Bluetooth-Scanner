<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/sammusama/Arduino/blob/master">
    <img src="arduino.png" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">Bluetooth scanner</h3>

  <p align="center">
    Bluetooth scanner to collect data from BLE devices nearby. You can use it as a cheap burglar alarm, a bluetooth id scanner or just like we did and try to estimate human traffic.
  
  </p>
</p>





<!-- ABOUT THE PROJECT -->
## About the project

This project was made for a course in Haaga-Helia UAS.  

Main idea was to create ESP32 IoT-device that collects bluetooth data from nearby devices, such as mobilephones and other bluetooth devices.

Then we planned to send it to a program that allows to monitor the collected data in real time and save it to a database. 
With the database in use, we could bring the data into an app for example. 

While researching the topics, we found out more about bluetooh and its limitations. Due to time limitations we focused to use BLE aka Bluetooth Low Energy for now. Bluetooth Classic could be possibly added to the project later on.

We highly recommend you to use these components in a way that fits your needs. If you have done something cool using this project, please let us know.

### Technologies used

* ESP32
* Node-Red
* MQTT
* ArduinoIDE
* BluetoothLE
* Expo

<!-- GETTING STARTED -->
## Getting started

These steps will help you to run the project and use different parts of it.
If you have any questions, you can find all the answers [here](https://www.google.com/).

Clone the repo
   ```sh
   git clone https://github.com/sammusama/Arduino
   ```

### ESP32

1. ESP32 programming is done with Arduino IDE using C++. 
   Download Arduino IDE [here](https://www.arduino.cc/en/software)
   </br>
   Also remember to install ESP32 to your IDE and all the prerequisites. [Here is a tutorial.](https://www.hackster.io/abdularbi17/how-to-install-esp32-board-in-arduino-ide-1cd571)

2. In factory state the ESP32 has limited memory to run a program. </br>To allow your ESP to use our MQTT-program, its memory needs to be allocated again.
   Guide on how to allocate the memory. [Here is a tutorial.](https://www.youtube.com/watch?v=5VoXNloOwZE)

3. Some additional libraries for this project needs to be installed on the IDE:

   * EspMQTTClient
   * PubSubClient
   * WiFi
   
4. Open 'mqtt_esp32_projektille.ino' in the IDE and change your Wifi and broker topic details in the code.

5. Upload the code to your ESP32.
   You can open the serial monitor to see what is going on when the code is loaded.

### Node-Red

1. Install Node-red: [Get Started](https://nodered.org/#get-started).

2. Install new nodes to your Node-Red pallette: Dashboard, Dashboard table and SQlite.

3. Import the flows.json to your Node-Red and check the numbered notes in the flow screen.

4. For detailed instructions to configure your flows and more documentation check [here](https://github.com/sammusama/Arduino/blob/master/Node-Red-Flow/README.md).

### Expo-App (Optional)

1. Go to /App folder with your cmd.

2. Install NPM packages
   ```sh
   npm install expo
   ```
3. Start expo
   ```sh
   expo start
   ```

<!-- USAGE EXAMPLES -->
## Usage examples

 ESP32 enables the use of multiple devices to send data to a same MQTT-Broker. This means that multiple invidual ESP32 devices can be set to cover an area using nothing but USB power.  
 
 The collected data can be used to estimate human traffic inside buildings, on the streets or event venue. One use case could be to calculate population on certain area and their behavior how they move in there.

 Program can also be used as a cheap burglar alarm if the burglar has bluetooth connection on in his devices. It can also be used as just a simple id sniffer.
 Possibilities are limited only by your imagination.

<!-- CONTRIBUTING -->
## Contributing
 
Any contributions you make are **greatly appreciated**.

<!-- AUTHORS -->
## Authors

**Marco Brandt | Kasper Toikkanen | Sam Kahron | Niilo Hytönen**

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Arduino team logo made by **Sam Kahron**.


