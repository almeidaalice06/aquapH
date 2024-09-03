import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Etiqueta from "./Etiqueta";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ListaPastas = ({
  propTop,
  labelText,
  assistiveChipPosition,
  assistiveChipHeight,
  assistiveChipWidth,
  assistiveChipTop,
  assistiveChipRight,
  assistiveChipBottom,
  assistiveChipLeft,
  labelTextFontSize,
  labelTextColor,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.vectorParent, groupViewStyle]}>
      <Image
        style={styles.componentChild}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Text style={styles.pasta120032024}>Pasta1 20/03/2024</Text>
      <Etiqueta
        labelText={labelText}
        assistiveChipPosition={assistiveChipPosition}
        assistiveChipHeight={assistiveChipHeight}
        assistiveChipWidth={assistiveChipWidth}
        assistiveChipTop={assistiveChipTop}
        assistiveChipRight={assistiveChipRight}
        assistiveChipBottom={assistiveChipBottom}
        assistiveChipLeft={assistiveChipLeft}
        labelTextFontSize={labelTextFontSize}
        labelTextColor={labelTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  pasta120032024: {
    height: "48%",
    width: "92.52%",
    top: "24%",
    left: "3.88%",
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.schemesOnTertiary,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  vectorParent: {
    top: 179,
    left: 18,
    width: 361,
    height: 35,
    position: "absolute",
  },
});

export default ListaPastas;
