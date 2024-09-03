import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";
import Etiqueta from "../components/Etiqueta";
import IOSswitch from "../components/IOSswitch";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Analise = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.analise}>
      <View style={styles.analiseChild} />
      <Pressable
        style={[styles.button5, styles.button5FlexBox]}
        onPress={() => navigation.navigate("PastasAmostras")}
      >
        <View style={[styles.enviarWrapper, styles.button5FlexBox]}>
          <Text style={styles.enviar}>Enviar</Text>
        </View>
      </Pressable>
      <Text style={[styles.detalhesDaAnlise, styles.inputFieldGroupLayout]}>
        Detalhes da análise
      </Text>
      <View style={styles.inputFieldParent}>
        <InputField
          label="Label"
          description="Description"
          value="Conteúdo analisádo"
          error="Error"
          hasLabel={false}
          hasError={false}
          hasDescription={false}
          inputFieldPosition="absolute"
          inputFieldTop={0}
          inputFieldLeft={1}
          inputFieldWidth={355}
          inputFieldHeight={43}
          valueColor="#999"
        />
        <InputField
          label="Label"
          description="Description"
          value="Detalhes"
          error="Error"
          hasLabel={false}
          hasError={false}
          hasDescription={false}
          inputFieldPosition="absolute"
          inputFieldTop={61}
          inputFieldLeft={0}
          inputFieldWidth={355}
          inputFieldHeight={43}
          valueColor="#999"
        />
      </View>
      <View style={[styles.analiseItem, styles.analiseLayout]} />
      <Image
        style={[styles.analiseInner, styles.analiseLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={[styles.adicionarEtiqueta, styles.adicionarEtiquetaFlexBox]}>
        Adicionar Etiqueta
      </Text>
      <Text
        style={[styles.ferramentaDeNalise, styles.adicionarEtiquetaFlexBox]}
      >
        Ferramenta de ánalise quimica
      </Text>
      <Etiqueta
        labelText="Ácido"
        assistiveChipPosition="absolute"
        assistiveChipHeight="2.23%"
        assistiveChipWidth="25.13%"
        assistiveChipTop="64.56%"
        assistiveChipRight="65.58%"
        assistiveChipBottom="33.21%"
        assistiveChipLeft="9.3%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <Etiqueta
        labelText="Neutro"
        assistiveChipPosition="absolute"
        assistiveChipHeight="2.23%"
        assistiveChipWidth="25.13%"
        assistiveChipTop="64.56%"
        assistiveChipRight="38.19%"
        assistiveChipBottom="33.21%"
        assistiveChipLeft="36.68%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <Etiqueta
        labelText="Báse"
        assistiveChipPosition="absolute"
        assistiveChipHeight="2.23%"
        assistiveChipWidth="25.13%"
        assistiveChipTop="64.68%"
        assistiveChipRight="10.8%"
        assistiveChipBottom="33.09%"
        assistiveChipLeft="64.07%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <Etiqueta
        labelText="Piscina"
        assistiveChipPosition="absolute"
        assistiveChipHeight="2.23%"
        assistiveChipWidth="25.13%"
        assistiveChipTop="68.28%"
        assistiveChipRight="65.58%"
        assistiveChipBottom="29.49%"
        assistiveChipLeft="9.3%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <Etiqueta
        labelText="Aquário"
        assistiveChipPosition="absolute"
        assistiveChipHeight="2.23%"
        assistiveChipWidth="25.13%"
        assistiveChipTop="68.28%"
        assistiveChipRight="38.19%"
        assistiveChipBottom="29.49%"
        assistiveChipLeft="36.68%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <Etiqueta
        labelText="Outro"
        assistiveChipPosition="absolute"
        assistiveChipHeight="2.23%"
        assistiveChipWidth="25.13%"
        assistiveChipTop="68.4%"
        assistiveChipRight="10.8%"
        assistiveChipBottom="29.37%"
        assistiveChipLeft="64.07%"
        labelTextFontSize={11}
        labelTextColor="#fff"
      />
      <IOSswitch
        iOSTogglePosition="absolute"
        iOSToggleWidth={35}
        iOSToggleHeight={22}
        iOSToggleMarginTop={-170}
        iOSToggleTop="50%"
        iOSToggleRight={56}
        onLabelHeight="32.27%"
        onLabelWidth="2%"
        onLabelTop="34.09%"
        onLabelRight="76.57%"
        onLabelBottom="33.64%"
        onLabelLeft="21.43%"
        knobHeight="87.27%"
        knobWidth="52.86%"
        knobTop="6.36%"
        knobRight="4%"
        knobBottom="6.36%"
      />
      <View style={[styles.inputFieldGroup, styles.inputFieldGroupLayout]}>
        <InputField
          label="Label"
          description="Description"
          value="Nome do composto"
          error="Error"
          hasLabel={false}
          hasError={false}
          hasDescription={false}
          inputFieldPosition="absolute"
          inputFieldTop={0}
          inputFieldLeft={1}
          inputFieldWidth={320}
          inputFieldHeight={36}
          valueColor="#999"
        />
        <InputField
          label="Label"
          description="Description"
          value="Formula quimica"
          error="Error"
          hasLabel={false}
          hasError={false}
          hasDescription={false}
          inputFieldPosition="absolute"
          inputFieldTop={51}
          inputFieldLeft={0}
          inputFieldWidth={320}
          inputFieldHeight={36}
          valueColor="#999"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button5FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputFieldGroupLayout: {
    height: 100,
    position: "absolute",
  },
  analiseLayout: {
    height: 166,
    width: 356,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },

  adicionarEtiquetaFlexBox: {
    width: 223,
    height: 20,
    display: "flex",
    textAlign: "center",
    color: Color.schemesOnTertiary,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  analiseChild: {
    backgroundColor: Color.colorDarkslategray,
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  enviar: {
    width: 165,
    height: 20,
    display: "flex",
    textAlign: "center",
    color: Color.schemesOnTertiary,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.defaultBoldTitle3_size,
    justifyContent: "center",
    alignItems: "center",
  },
  enviarWrapper: {
    width: 168,
    height: 42,
  },
  button5: {
    top: 684,
    left: 96,
    backgroundColor: Color.colorGray_100,
    width: 182,
    height: 57,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_lg,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  detalhesDaAnlise: {
    top: 70,
    left: -3,
    fontSize: FontSize.size_13xl,
    display: "flex",
    textAlign: "center",
    color: Color.schemesOnTertiary,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    height: 87,
    justifyContent: "center",
    alignItems: "center",
    width: 398,
  },
  inputFieldParent: {
    top: 136,
    height: 104,
    width: 356,
    left: 21,
    position: "absolute",
  },
  analiseItem: {
    top: 259,
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderStyle: "solid",
    borderColor: "#808080",
    borderWidth: 2,
    left: 21,
    height: 166,
  },
  analiseInner: {
    top: 480,
    left: 20,
  },
  adicionarEtiqueta: {
    top: 510,
    left: 37,
    fontSize: FontSize.defaultBoldTitle3_size,
    width: 200,
  },
  ferramentaDeNalise: {
    top: 284,
    left: 41,
    fontSize: FontSize.defaultRegularFootnote_size,
  },
  inputFieldGroup: {
    top: 317,
    left: 38,
    width: 298,
  },
  analise: {
    backgroundColor: Color.schemesOnTertiary,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: "100%",
  },
});

export default Analise;
