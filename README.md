<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/sammusama/Arduino/blob/master">
    <img src="arduino.png" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">Bluetooth scanner</h3>

  <p align="center">
    Bluetooth scanner to collect data from BLE devices nearby. You can use it as a cheap burglar alarm, a bluetooth id scanner or just use it like we did and try to estimate human traffic.
  
 
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


### Node-Red / Node-Red-MQTT-SQLITE v 1.0.0

Simple Node-Red program to read from a MQTT input ja store it in a database.

Install Node-red: https://nodered.org/#get-started

Install new nodes to your Node-Red pallette: Dashboard, Dashboard table and SQlite.

Import the flows.json to your Node-Red and check the numbered notes in the flow screen.

First you need a source for your MQTT, I used a ESP32 that sends ID data and separates each ID with a new line. Then the ID data is stored in the SQlite database along with the date, time and MQTT topic (this comes from the MQTT broker). To start the database you need to press the inject node CREATE TABLE, so the prosess can start. This is a workaround to create the table and file, might be worth to fix in the future.

![alt text](https://github.com/MarcoBrandt/Node-Red-MQTT-SQLITE/blob/main/images/Screenshot%202020-12-12%20at%2014.29.16.png)

Function node code for SQlite insertion:
``` 
var out = "INSERT INTO BTdata (date, time, topic, data)"
var today = new Date()
var time = today.toLocaleTimeString();
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();

out = out + "VALUES ('" + date + "','" + time + "','" 
out = out + msg.topic + "','" + msg.payload + "');"
    
msg.topic=out;

return msg;
```

After the data is stored in the database it can be read from multiple http end-points:
![alt text](https://github.com/MarcoBrandt/Node-Red-MQTT-SQLITE/blob/main/images/Screenshot%202020-12-12%20at%2014.31.16.png)


Endpoint | What does it do?
------------ | -------------
/data | Fetches all the data, JSON dump
/data/all/count | Counts all IDs from the database
/data/all/unique | Fetches all data from devices with Unique ID
/data/all/uniquedata |  Fetches data in date, time and data format from devices with Unique ID
/data/all/unique/count | Counts all Unique IDs
/data/today |  Fetches all data from today
/data/today/count | Counts all IDs from today
/data/today/unique | Fetches all data from today that has an Unique ID
/data/today/uniquedata | Fetches data from today in date, time and data format from devices with Unique ID 
/data/today/unique/count | Counts all Unique IDs from today
/data/week | Fetches all data from last week
/data/week/count | Counts all IDs from last week
/data/week/unique | Fetches all data from last week that has an Unique ID
/data/week/uniquedata | Fetches data from last week in date, time and data format from devices with Unique ID
/data/week/unique/count | Counts all Unique IDs from last week
/data/livefeed | Gets the latest scan information

## Dashboard

Dashboard nodes with timed injections. Live feed updates every 5 seconds, the rest updates once per minutes. For this to work you need Dashboard and Dashboard tables installed on your Node-Red.

![alt text](https://github.com/MarcoBrandt/Node-Red-MQTT-SQLITE/blob/main/images/Screenshot%202020-12-12%20at%2014.32.05.png)

Go to the address: localhost:1880/ui/#/0

![alt text](https://github.com/MarcoBrandt/Node-Red-MQTT-SQLITE/blob/main/images/Screenshot%202020-12-12%20at%2014.42.50.png)




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



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



