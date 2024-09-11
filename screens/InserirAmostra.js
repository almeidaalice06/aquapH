import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ActionSheet from "../components/ActionSheet";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InserirAmostra = () => {
  const navigation = useNavigation();
  const [addCircleImageVisible, setAddCircleImageVisible] = useState(false);

  const openAddCircleImage = useCallback(() => {
    setAddCircleImageVisible(true);
  }, []);

  const closeAddCircleImage = useCallback(() => {
    setAddCircleImageVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.inserirAmostra, styles.iconLayout]}>
        <View style={styles.inserirAmostraChild} />
        <Image
          style={styles.personcropcirclefillIcon}
          contentFit="cover"
          source={require("../assets/personcropcirclefill1.png")}
        />
       
        <Pressable
          style={[styles.button5, styles.buttonLayout]}
          onPress={() => navigation.navigate("PastasAmostras")}
        >
          <View
            style={[
              styles.histticoDeAnlisesWrapper,
              styles.anlisesWrapperFlexBox,
            ]}
          >
            <Text style={[styles.histticoDeAnlises, styles.anlisesTypo]}>
              Histórico de Análises
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.addCircle} onPress={openAddCircleImage}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/add-circle.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={addCircleImageVisible}>
        <View style={styles.addCircleImageOverlay}>
          <Pressable
            style={styles.addCircleImageBg}
            onPress={closeAddCircleImage}
          />
          <ActionSheet onClose={closeAddCircleImage} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  buttonLayout: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_13xl,
    height: 57,
    width: 300,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
    top: 694,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
  },
  anlisesWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  anlisesTypo: {
    height: 20,
    display: "flex",
    textAlign: "center",
    color: Color.schemesOnTertiary,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "400",
    fontSize: FontSize.defaultBoldTitle3_size,
    justifyContent: "center",
    alignItems: "center",
  },
  inserirAmostraChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  personcropcirclefillIcon: {
    height: "7.31%",
    width: "14.82%",
    top: "6.57%",
    right: "5.03%",
    bottom: "86.12%",
    left: "80.15%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  anlisesQuimicas: {
    width: 200,
  },
  anlisesQuimicasWrapper: {
    width: 200,
    height: 40,
  },
  button4: {
    marginTop: -20,
    left: 50,
  },
  histticoDeAnlises: {
    width: 300,
  },
  histticoDeAnlisesWrapper: {
    width: 300,
    height: 42,
  },
  button5: {
    marginTop: 50,
    left: 50,
  },
  addCircleImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  addCircleImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  addCircle: {
    left: 116,
    top: 321,
    width: 166,
    height: 166,
    position: "absolute",
  },
  inserirAmostra: {
    backgroundColor: Color.schemesOnTertiary,
    flex: 1,
    overflow: "hidden",
    height: "100%",
  },
});

export default InserirAmostra;
