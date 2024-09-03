import React, { useMemo } from "react";
import { SafeAreaView, View, Text, Image, Pressable, StyleSheet } from 'react-native';

import { FontFamily, FontSize, Color, StyleVariable } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputField = ({
  label = "Label",
  description = "Description",
  value = "Value",
  error = "Error",
  hasLabel = true,
  hasError = false,
  hasDescription = false,
  inputFieldPosition,
  inputFieldTop,
  inputFieldLeft,
  inputFieldWidth, 
  inputFieldHeight,
  valueColor,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", inputFieldPosition),
      ...getStyleValue("top", inputFieldTop),
      ...getStyleValue("left", inputFieldLeft),
      ...getStyleValue("width", inputFieldWidth),
      ...getStyleValue("height", inputFieldHeight),
    };
  }, [
    inputFieldPosition,
    inputFieldTop,
    inputFieldLeft,
    inputFieldWidth,
    inputFieldHeight,
  ]);

  const valueStyle = useMemo(() => {
    return {
      ...getStyleValue("color", valueColor),
    };
  }, [valueColor]);

  return (
    <View style={[styles.statedefaultValueTypedefa, inputFieldStyle]}>
      {hasLabel && (
        <Text style={[styles.label, styles.labelTypo]}>{label}</Text>
      )}
      {hasDescription && (
        <Text style={[styles.description, styles.errorTypo]}>
          {description}
        </Text>
      )}
      <View style={styles.input}>
        <Text style={[styles.value, styles.labelTypo, valueStyle]}>
          {value}
        </Text>
      </View>
      {hasError && (
        <Text style={[styles.error, styles.errorTypo]}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyBase,
    fontSize: FontSize.bodyBase_size,
    color: Color.textDefaultDefault,
  },
  errorTypo: {
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.bodyBase,
    lineHeight: 22,
    fontSize: FontSize.bodyBase_size,
  },
  label: {
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.bodyBase,
    fontSize: FontSize.bodyBase_size,
    alignSelf: "stretch",
  },
  description: {
    color: Color.textDefaultSecondary,
    alignSelf: "stretch",
  },
  value: {
    flex: 1,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.bodyBase,
    fontSize: FontSize.bodyBase_size,
  },
  input: {
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.schemesOnTertiary,
    borderStyle: "solid",
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: StyleVariable.space400,
    paddingVertical: StyleVariable.space300,
    minWidth: 240,
    alignSelf: "stretch",
  },
  error: {
    color: Color.textDefaultDefault,
  },
  statedefaultValueTypedefa: {
    gap: StyleVariable.space200,
  },
});

export default InputField;
