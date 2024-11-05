import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PaginaInicial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paginaInicial}>
      <View style={styles.paginaInicialChild} />
      <Pressable
        style={[styles.button4, styles.button4FlexBox]}
        onPress={() => navigation.navigate("InserirAmostra")}
      >
        <Text style={styles.iniciar}>INICIAR</Text>
      </Pressable>
      <Text style={[styles.analizarOPh, styles.analizarOPhPosition]}>
        Analisar o pH da água nunca foi tão fácil
      </Text>
      <Text style={[styles.aquaph, styles.aquaphFlexBox]}>AquapH</Text>
      <Image
        style={[styles.logoFinal1Icon, styles.analizarOPhPosition]}
        contentFit="cover"
        source={require("../assets/logo-final-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button4FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  analizarOPhPosition: {
    width: 355,
    left: 22,
    position: "absolute",
  },
  aquaphFlexBox: {
    color: Color.schemesOnTertiary,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  paginaInicialChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  iniciar: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#0c1067",
    fontSize: FontSize.size_lg, // Aumente o tamanho da fonte, se necessário
    textAlign: "center",
  },
  button4: {
    top: 622,
    left: 94,
    borderRadius: Border.br_11xl,
    width: 226,
    height: 60, // Aumente a altura do botão para evitar corte
    justifyContent: "center", // Centraliza o texto verticalmente
    alignItems: "center", // Centraliza o texto horizontalmente
    position: "absolute",
    backgroundColor: Color.schemesOnTertiary,
  },
  analizarOPh: {
    top: 559,
    fontFamily: FontFamily.montserratRegular,
    height: 31,
    color: Color.schemesOnTertiary,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 17,
    width: 400,
    left: 22,
  },
  aquaph: {
    top: 499,
    left: 36,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    width: 341,
    height: 43,
    position: "absolute",
  },
  logoFinal1Icon: {
    top: 129,
    height: 352,
  },
  paginaInicial: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: "100%",
    backgroundColor: Color.schemesOnTertiary,
  },
});

export default PaginaInicial;
