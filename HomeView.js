import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function HomeView({ navigation }) {
  const [device, setDevice] = useState([]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Devices", { device })}
      >
        <Image
          source={{ uri: "https://i.imgur.com/6EyuKgK.png" }}
          style={{ width: 300, height: 300 }}
        />
      </TouchableOpacity>
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
