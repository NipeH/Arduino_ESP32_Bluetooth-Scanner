import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export default function HomeView({ navigation }) {
  const [device, setDevice] = useState([]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Button
          title="Devices"
          onPress={() => navigation.navigate("Devices", { device })}
        >
          <Image
            style={styles.imagestyle}
            source={{ uri: "https://i.imgur.com/6EyuKgK.png" }}
          />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//
