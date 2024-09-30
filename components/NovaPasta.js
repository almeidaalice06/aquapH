// screens/NovaPasta.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NovaPasta = ({ route }) => {
  // Get the folder data passed from PastasAmostras
  const { pastaTitle, creationDate } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Pasta</Text>
      <Text style={styles.text}>Título: {pastaTitle}</Text>
      <Text style={styles.text}>Data de Criação: {creationDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default NovaPasta;
