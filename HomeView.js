import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export default function HomeView({ navigation }) {
  const [device, setDevice] = useState([]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <Button
          title="Devices"
          onPress={() => navigation.navigate("Devices", { device })}
        ></Button>
        <Image
          source={{ uri: "https://i.imgur.com/6EyuKgK.png" }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130c18",
    alignItems: "center",
    justifyContent: "center",
  },
});

//
