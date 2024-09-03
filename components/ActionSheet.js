import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Color,
  FontSize,
  FontFamily,
  Border,
  Gap,
} from "../GlobalStyles";

const ActionSheet = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.actionsheet}>
      <View style={styles.groupedActions}>
        <Pressable
          style={styles.actionsheetAction}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.action}>Câmera</Text>
        </Pressable>
        <View style={styles.separator} />
        <View style={[styles.actionsheetAction1, styles.actionsheetFlexBox]}>
          <Text style={styles.action1}>Arquivos</Text>
        </View>
        <View style={styles.separator} />
        <View style={[styles.actionsheetAction2, styles.actionsheetFlexBox]}>
          <Text style={[styles.action2, styles.actionFlexBox]}>Action</Text>
        </View>
        <View style={styles.separator} />
        <View style={[styles.actionsheetAction2, styles.actionsheetFlexBox]}>
          <Text style={styles.action1}>Action</Text>
        </View>
      </View>
      <Pressable
        style={[styles.actionsheetAction4, styles.actionsheetFlexBox]}
        onPress={() => navigation.navigate("InserirAmostra")}
      >
        <Text style={[styles.action4, styles.actionFlexBox]}>Cancelar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsheetFlexBox: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  actionFlexBox: {
    color: Color.defaultSystemRedDark,
    lineHeight: 24,
    width: 327,
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldTitle3_size,
    justifyContent: "center",
    alignItems: "center",
  },
  action: {
    lineHeight: 18,
    width: 327,
    display: "flex",
    textAlign: "center",
    color: Color.defaultSystemBlueDark,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.montserratRegular,
    justifyContent: "center",
    alignItems: "center",
  },
  actionsheetAction: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray_200,
    alignSelf: "stretch",
    alignItems: "center",
  },
  separator: {
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderTopWidth: 0.5,
    height: 1,
    alignSelf: "stretch",
  },
  action1: {
    lineHeight: 24,
    width: 327,
    display: "flex",
    textAlign: "center",
    color: Color.defaultSystemBlueDark,
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldTitle3_size,
    justifyContent: "center",
    alignItems: "center",
  },
  actionsheetAction1: {
    backgroundColor: Color.colorGray_200,
    paddingVertical: Padding.p_lg,
  },
  action2: {
    fontFamily: FontFamily.montserratRegular,
    color: Color.defaultSystemRedDark,
  },
  actionsheetAction2: {
    display: "none",
    backgroundColor: Color.colorGray_200,
    paddingVertical: Padding.p_lg,
  },
  groupedActions: {
    overflow: "hidden",
    borderRadius: Border.br_smi,
    alignSelf: "stretch",
  },
  action4: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
  },
  actionsheetAction4: {
    backgroundColor: Color.systemBackgroundDarkElevatedPrimary,
    borderRadius: Border.br_smi,
  },
  actionsheet: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_13xl,
    gap: Gap.gap_md,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
  },
});

export default ActionSheet;
