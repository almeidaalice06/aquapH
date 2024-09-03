import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Camera = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.camera}
      onPress={() => navigation.navigate("Analise")}
    >
      <View style={[styles.cameraChild, styles.cameraPosition]} />
      <Image
        style={[styles.myCameraAppDoesntWorkCameIcon, styles.cameraPosition]}
        contentFit="cover"
        source={require("../assets/camera1.jpeg")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cameraPosition: {
    width: "100%",
    left: 0,
    top: 30,
    position: "absolute",
  },
  cameraChild: {
    backgroundColor: Color.colorDarkslategray,
    height: "100%",
  },
  myCameraAppDoesntWorkCameIcon: {
    height: "100%",
  },
  camera: {
    backgroundColor: "#000000",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: "100%",
  },
});

export default Camera;
