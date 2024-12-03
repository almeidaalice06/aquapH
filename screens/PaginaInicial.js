import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

// Cores, fontes e tamanhos globais
const Color = {
  schemesOnTertiary: "#ffffff", // Cor branca
  colorBackground: "#2F2F2F", // Cor de fundo da imagem (cinza escuro)
  buttonText: "#0c1067", // Azul escuro para texto do botão
};
const FontFamily = {
  montserratSemiBold: "Montserrat-SemiBold",
  montserratRegular: "Montserrat-Regular",
  montserratExtraBold: "Montserrat-ExtraBold",
};
const FontSize = {
  size_lg: 18,
  size_17xl: 32,
};
const Border = {
  br_11xl: 25,
};

const PaginaInicial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paginaInicial}>
      {/* Fundo */}
      <View style={styles.paginaInicialChild} />

      {/* Logo */}
      <Image
        style={[styles.logoFinal1Icon, styles.analizarOPhPosition]}
        contentFit="cover"
        source={require("../assets/logo-final-1.png")} // Adapte o caminho da imagem, se necessário
      />

      {/* Título */}
      <Text style={[styles.aquaph, styles.aquaphFlexBox]}>AquapH</Text>

      {/* Descrição */}
      <Text style={[styles.analizarOPh, styles.analizarOPhPosition]}>
        Analisar o pH da água nunca foi tão fácil
      </Text>

      {/* Botão Iniciar */}
      <Pressable
        style={[styles.button4, styles.button4FlexBox]}
        onPress={() => navigation.navigate("InserirAmostra")}
      >
        <Text style={styles.iniciar}>INICIAR</Text>
      </Pressable>
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
    width: "90%",
    left: "5%",
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
    backgroundColor: Color.colorBackground, // Restaurada para cinza escuro
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  iniciar: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#000000", // Texto preto no botão
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  button4: {
    top: "75%", // Ajuste a posição do botão para dispositivos diferentes
    alignSelf: "center",
    borderRadius: Border.br_11xl,
    width: "60%", // Adapta o botão à largura da tela
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.schemesOnTertiary,
  },
  analizarOPh: {
    top: "68%",
    fontFamily: FontFamily.montserratRegular,
    color: Color.schemesOnTertiary,
    textAlign: "center",
    fontSize: 17,
    alignSelf: "center",
  },
  aquaph: {
    top: "60%",
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    width: "100%",
    textAlign: "center",
    position: "absolute",
  },
  logoFinal1Icon: {
    top: "15%",
    height: "40%",
    alignSelf: "center",
  },
  paginaInicial: {
    flex: 1,
    backgroundColor: Color.colorBackground, // Fundo restaurado
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PaginaInicial;
