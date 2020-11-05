<<<<<<< HEAD:Esp32/BLE_scan_esp32/BLE_scan_esp32.ino

#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>


int scanTime = 10; //In seconds
BLEScan* pBLEScan;

class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("ID: %s \n", advertisedDevice.getAddress().toString().c_str()); // Search result reduced for now to print only addresses
    }
};

void setup() {
  Serial.begin(9600);
  Serial.println("Scanning...");

  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); //create new scan
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); //active scan uses more power, but get results faster
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // less or equal setInterval value
}

void loop() {
  // put your main code here, to run repeatedly:
  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  Serial.println("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // delete results fromBLEScan buffer to release memory
  delay(1000);
}
=======
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>
#include <WiFi.h>
#include <ArduinoJson.h>

const char* ssid = "Wifi_verkkko";
const char* password = "salasana";

#include <PubSubClient.h>
#define mqtt_server "http://localhost:1880/"
WiFiClient espClient;
PubSubClient client(espClient);
//const char* mqttUser = "yourInstanceUsername";
//const char* mqttPassword = "yourInstancePassword";
#define haetutLaitteet "scannerMesh/laitteet"


long lastMsg = 0;
char msg[50];
int value = 0;

int scanTime = 10; //In seconds
BLEScan* pBLEScan;


void setup() {
  Serial.begin(9600);
  Serial.println();
  
  wifi_setup();
  mqtt_setup();
  
}

void wifi_setup(){
  Serial.print("Yhdistetään verkkoon ");
  Serial.println(ssid);
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    }

  Serial.println("WiFi yhdistetty");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
}

void mqtt_setup(){
  client.setServer(mqtt_server, 1883);
  client.connect("espScanner");

  /*while (!client.connected()) {
    Serial.println("Yhdistetään MQTT...");
 
    if (client.connect("ESP32Client", mqttUser, mqttPassword )) {
 
      Serial.println("connected");
 
    } else {
 
      Serial.print("failed with state ");
      Serial.print(client.state());
      delay(2000);
 
    }
  }*/
  
}

void scannaus(){
  
  class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("ID: %s \n", advertisedDevice.getAddress().toString().c_str());
    }
  };
  
  Serial.println("Scanning...");

  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); //create new scan
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); //active scan uses more power, but get results faster
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // less or equal setInterval value

  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  //Serial.println("Devices found: ");
  Serial.println(foundDevices.getCount());
  //Serial.println("Scan done!");
  pBLEScan->clearResults();
  delay(1000);
}



void loop() {
  scannaus();
  

  client.publish(haetutLaitteet, String(BLEScanResults));

  //StaticJsonBuffer<300> JSONbuffer;
  //JsonObject& JSONencoder = JSONbuffer.createObject();
}
>>>>>>> 2d391ffa514f76c2539cc69439490e1bf84be418:Esp32/BLE_scan_esp32.ino
