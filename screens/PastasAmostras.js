import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ListaPastas from "../components/ListaPastas";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PastasAmostras = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pastasAmostras, styles.iconLayout]}>
      <View
        style={[styles.pastasAmostrasChild, styles.histricoDeAnlisesLayout]}
      />

      <View style={[styles.button5, styles.button5FlexBox]}>
        <View style={[styles.criarPastaWrapper, styles.button5FlexBox]}>
          <Pressable
            style={[styles.button4, styles.button4FlexBox]}
            onPress={() => navigation.navigate("CriarPasta")}
          >
            <View style={styles.button4FlexBox}>
              <Text style={[styles.criarPasta, styles.criarPastaFlexBox]}>Criar Pasta</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.chevronleftcirclefill}
        onPress={() => navigation.navigate("InserirAmostra")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleftcirclefill.png")}
        />
      </Pressable>
      <Text style={[styles.histricoDeAnlises, styles.criarPastaFlexBox]}>
        Histórico de Análises
      </Text>
      <ListaPastas
        labelText="Etiqueta"
        assistiveChipPosition="absolute"
        assistiveChipHeight="72%"
        assistiveChipWidth="27.7%"
        assistiveChipTop="12%"
        assistiveChipRight="3.6%"
        assistiveChipBottom="16%"
        assistiveChipLeft="68.7%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <ListaPastas
        propTop={221}
        labelText="Etiqueta"
        assistiveChipPosition="absolute"
        assistiveChipHeight="72%"
        assistiveChipWidth="27.7%"
        assistiveChipTop="12%"
        assistiveChipRight="3.6%"
        assistiveChipBottom="16%"
        assistiveChipLeft="68.7%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <ListaPastas
        propTop={264}
        labelText="Etiqueta"
        assistiveChipPosition="absolute"
        assistiveChipHeight="72%"
        assistiveChipWidth="27.7%"
        assistiveChipTop="12%"
        assistiveChipRight="3.6%"
        assistiveChipBottom="16%"
        assistiveChipLeft="68.7%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <ListaPastas
        propTop={307}
        labelText="Etiqueta"
        assistiveChipPosition="absolute"
        assistiveChipHeight="72%"
        assistiveChipWidth="27.7%"
        assistiveChipTop="12%"
        assistiveChipRight="3.6%"
        assistiveChipBottom="16%"
        assistiveChipLeft="68.7%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <Image
        style={styles.personcropcirclefillIcon}
        contentFit="cover"
        source={require("../assets/personcropcirclefill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  histricoDeAnlisesLayout: {
    width: "100%",
    position: "absolute",
  },
  button5FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  criarPastaFlexBox: {
    display: "flex",
    textAlign: "center",
    color: Color.schemesOnTertiary,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
  },
  
  pastasAmostrasChild: {
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: Color.colorDarkslategray,
    height: "100%",
  },
  criarPasta: {
    fontSize: FontSize.defaultBoldTitle3_size,
    width: 165,
    height: 25,
  },
  criarPastaWrapper: {
    width: 166,
    height: 29,
  },
  button5: {
    top: 698,
    left: 197,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_100,
    width: 182,
    height: 45,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_lg,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  chevronleftcirclefill: {
    left: "3.52%",
    top: "85.25%",
    right: "80.9%",
    bottom: "7.06%",
    width: "15.58%",
    height: "7.68%",
    position: "absolute",
  },
  histricoDeAnlises: {
    top: 92,
    left: 4,
    fontSize: FontSize.size_13xl,
    height: 87,
    width: "100%",
    position: "absolute",
  },
  personcropcirclefillIcon: {
    top: 34,
    left: 320,
    width: 59,
    height: 59,
    position: "absolute",
    overflow: "hidden",
  },
  pastasAmostras: {
    backgroundColor: Color.schemesOnTertiary,
    flex: 1,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
});

export default PastasAmostras;
