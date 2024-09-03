import React, { useMemo } from "react";
import { Color, Border } from "../GlobalStyles";
import { SafeAreaView, View, Text, Image, Pressable, StyleSheet } from 'react-native'; // Adicionado 'StyleSheet' na importação


const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IOSswitch = ({
  iOSTogglePosition,
  iOSToggleWidth,
  iOSToggleHeight,
  iOSToggleMarginTop,
  iOSToggleTop,
  iOSToggleRight,
  onLabelHeight,
  onLabelWidth,
  onLabelTop,
  onLabelRight,
  onLabelBottom,
  onLabelLeft,
  knobHeight,
  knobWidth,
  knobTop,
  knobRight,
  knobBottom,
}) => {
  const iOSToggleStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iOSTogglePosition),
      ...getStyleValue("width", iOSToggleWidth),
      ...getStyleValue("height", iOSToggleHeight),
      ...getStyleValue("marginTop", iOSToggleMarginTop),
      ...getStyleValue("top", iOSToggleTop),
      ...getStyleValue("right", iOSToggleRight),
    };
  }, [
    iOSTogglePosition,
    iOSToggleWidth,
    iOSToggleHeight,
    iOSToggleMarginTop,
    iOSToggleTop,
    iOSToggleRight,
  ]);

  const onLabelStyle = useMemo(() => {
    return {
      ...getStyleValue("height", onLabelHeight),
      ...getStyleValue("width", onLabelWidth),
      ...getStyleValue("top", onLabelTop),
      ...getStyleValue("right", onLabelRight),
      ...getStyleValue("bottom", onLabelBottom),
      ...getStyleValue("left", onLabelLeft),
    };
  }, [
    onLabelHeight,
    onLabelWidth,
    onLabelTop,
    onLabelRight,
    onLabelBottom,
    onLabelLeft,
  ]);

  const knobStyle = useMemo(() => {
    return {
      ...getStyleValue("height", knobHeight),
      ...getStyleValue("width", knobWidth),
      ...getStyleValue("top", knobTop),
      ...getStyleValue("right", knobRight),
      ...getStyleValue("bottom", knobBottom),
    };
  }, [knobHeight, knobWidth, knobTop, knobRight, knobBottom]);

  return (
    <View style={[styles.stateonDarkModeonOnoff, iOSToggleStyle]}>
      <View style={styles.track} />
      <View style={[styles.onLabel, styles.knobBg, onLabelStyle]} />
      <View style={[styles.knob, styles.knobBg, knobStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  knobBg: {
    backgroundColor: Color.schemesOnTertiary,
    position: "absolute",
  },
  track: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorLightgreen,
    position: "absolute",
    borderRadius: Border.br_base,
  },
  onLabel: {
    height: "32.26%",
    width: "1.96%",
    top: "33.87%",
    right: "76.47%",
    bottom: "33.87%",
    left: "21.57%",
  },
  knob: {
    height: "87.1%",
    width: "52.94%",
    top: "6.45%",
    right: "3.92%",
    bottom: "6.45%",
    left: "43.14%",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 7,
    elevation: 7,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
  },
  stateonDarkModeonOnoff: {
    width: 51,
    height: 31,
    overflow: "hidden",
    borderRadius: Border.br_base,
  },
});

export default IOSswitch;
