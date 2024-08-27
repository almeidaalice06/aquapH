import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo a tela de loggin!</Text>
     
    </View>
    
  );
 <TouchableOpacity
   style={styles.button}
   onPress={() => navigation.navigate("Login")}
 >
   <Text style={styles.buttonText}>Get Started</Text>
 </TouchableOpacity>;
 <TouchableOpacity
   style={styles.button}
   onPress={() => navigation.navigate("CriarLogin")} //precisa criar esse arquivo
 >
   <Text style={styles.buttonText}>Criar Login</Text>
 </TouchableOpacity>;
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


