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

This project was made for a course in Haaga-Helia UAS.  

Main idea was to create a ESP32 IoT-device that collects bluetooth data from the nearby devices as mobilephones and other bluetooth devices.  
Then we planned to send it to a program that allows monitoring the collected data in real time and save it to a database. 
Now we could use CRUD commands to bring the data to charts in mobile devices for example. 


### Technologies used

* ESP32
* Node
* Node-Red
* MQTT
* ArduinoIDE
* Bluetooth Low Energy



<!-- GETTING STARTED -->
## Getting started

These steps will help you to run the project.

### ESP32 Microcontroller

1. ESP32 programming is done with Arduino IDE using C++. 
   Download Arduino IDE here:  https://www.arduino.cc/en/software
   Also remember to install ESP32 to your IDE and all the prerequisites: https://www.hackster.io/abdularbi17/how-to-install-esp32-board-in-arduino-ide-1cd571

2. In factory state the ESP32 has limited memory to run a program. To allow the bluetooth module use MQTT-program, its memory needs to be allocated again.
   Guide on how to allocate the memory: https://www.youtube.com/watch?v=5VoXNloOwZE

3. Some additional libraries for this project needs to be installed too:

   * EspMQTTClient
   * PubSubClient
   * WiFi
   
4. Open 'mqtt_esp32_projektille.ino' in the IDE and upload it to your ESP32.
   You can open the serial monitor to see what is going on.


### Node-Red / Node-Red-MQTT-SQLITE v 1.0.0

1. Install Node-red: https://nodered.org/#get-started

2. Install new nodes to your Node-Red pallette: Dashboard, Dashboard table and SQlite.

3. Import the flows.json to your Node-Red and check the numbered notes in the flow screen.

4. For more detailed instructions to configure your flows and more documentation, go to: https://github.com/sammusama/Arduino/blob/master/Node-Red-Flow/README.md



### Node (Optional since the App is not in fully working)

Tähän vielä korjauksia!!

1. Clone the repo
   ```sh
   git clone https://github.com/sammusama/Arduino
   ```

2. Go to /App folder with your cmd.

3. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage examples

 ESP32 enables use of one or mode bluetooth modules to send data to a same MQTT-client. This means that multiple invidual ESP32 devices can be set to cover a area using nothing but USB power attached to them.  
 
 This programn can be used to collect data and estimate human traffic inside buildings or on the streets. This can be used by some city to calculate population on certain area or human behavior how they move in the area.

 Program can also be used as a cheap burglar alarm if the burglar has bluetooth connection on in his devices. It can also be used as just a simple id scanner.
 
 

<!-- CONTRIBUTING -->
## Contributing

Tähän vielä korjauksia!!
 
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


