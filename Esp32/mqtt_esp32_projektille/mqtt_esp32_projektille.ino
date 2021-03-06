#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <Wire.h>

// Replace the next variables with your SSID/Password combination
const char* ssid = "SSID";
const char* password = "Salasana";

// Add your MQTT Broker IP address, example:
//const char* mqtt_server = "192.168.1.144";
const char* mqtt_server = "192.168.86.225";

WiFiClient espClient;
PubSubClient client(espClient);
int value = 0;
int clients = 0;

int scanTime = 10;
BLEScan* pBLEScan;

void setup() {
  Serial.begin(115200);
  

  setup_wifi();
  client.setServer(mqtt_server, 1883);
}

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("ESP8266Client")) {
      Serial.println("connected");
      // Subscribe
      client.subscribe("esp32/");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void scannaus(){
  class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      client.publish("/esp32/device_2", advertisedDevice.getAddress().toString().c_str());

    }
  };
  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); 
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); 
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99); 

  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  
  // Serial test communication, prints amount of BT devices found
  Serial.println(foundDevices.getCount());
  
  /*
  // Amount of BT devices found 
  clients = foundDevices.getCount();
  char clientstr[8];
  dtostrf(clients, 1, 0, clientstr);   
  client.publish("/esp32/devices_num", clientstr);*/

  
  pBLEScan->clearResults();
  delay(2000);
}


void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  
  scannaus();
 
}
