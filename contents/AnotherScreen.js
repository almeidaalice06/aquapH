import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AnotherScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à próxima tela!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
