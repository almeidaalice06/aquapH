import React, { useMemo } from "react";
import { SafeAreaView, View, Text, Image, Pressable, StyleSheet } from 'react-native'; // Adicionado 'StyleSheet' na importação
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Etiqueta = ({
  labelText = "Label",
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
  const assistiveChipStyle = useMemo(() => {
    return {
      ...getStyleValue("position", assistiveChipPosition),
      ...getStyleValue("height", assistiveChipHeight),
      ...getStyleValue("width", assistiveChipWidth),
      ...getStyleValue("top", assistiveChipTop),
      ...getStyleValue("right", assistiveChipRight),
      ...getStyleValue("bottom", assistiveChipBottom),
      ...getStyleValue("left", assistiveChipLeft),
    };
  }, [
    assistiveChipPosition,
    assistiveChipHeight,
    assistiveChipWidth,
    assistiveChipTop,
    assistiveChipRight,
    assistiveChipBottom,
    assistiveChipLeft,
  ]);

  const labelTextStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", labelTextFontSize),
      ...getStyleValue("color", labelTextColor),
    };
  }, [labelTextFontSize, labelTextColor]);

  return (
    <View
      style={[
        styles.styleoutlinedConfiguration,
        styles.stateLayerFlexBox,
        assistiveChipStyle,
      ]}
    >
      <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
        <Text style={[styles.labelText, labelTextStyle]}>{labelText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateLayerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelSmall,
    color: Color.schemesOnSurface,
    textAlign: "center",
  },
  stateLayer: {
    height: 32,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
  styleoutlinedConfiguration: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.schemesOutline,
    borderWidth: 1,
    overflow: "hidden",
  },
});

export default Etiqueta;
