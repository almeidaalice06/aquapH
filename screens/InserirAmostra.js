import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker"; // Importa o image-picker
import ActionSheet from "../components/ActionSheet";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InserirAmostra = () => {
  const navigation = useNavigation();
  const [addCircleImageVisible, setAddCircleImageVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null); // Estado para armazenar a imagem selecionada

  // Função para pedir permissão da câmera
  const askCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão necessária",
        "Desculpe, nós precisamos da permissão da câmera para isso funcionar!"
      );
    }
  };

  // Função para abrir a câmera
  const openCamera = async () => {
    await askCameraPermission(); // Pede permissão antes de abrir a câmera
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // Armazena a imagem capturada
    }
  };

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

        {/* Imagem transformada em botão, agora redireciona para Perfil.js */}
        <Pressable
          style={styles.personcropcirclefillIcon}
          onPress={() => navigation.navigate("Perfil")} // Redireciona para a tela Perfil
        >
          <Image
            style={styles.personcropcirclefillImage}
            contentFit="cover"
            source={require("../assets/personcropcirclefill1.png")}
          />
        </Pressable>

        {/* Pressable para abrir a câmera */}
        <Pressable style={styles.addCircle} onPress={openCamera}>
          {imageUri ? ( // Se houver uma imagem capturada, exibe a imagem
            <Image
              style={[styles.icon, styles.iconLayout]}
              source={{ uri: imageUri }}
              contentFit="cover"
            />
          ) : (
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/add-circle.png")}
            />
          )}
        </Pressable>

        {/* Botão para analisar a foto */}
        {imageUri && (
          <Pressable
            style={[styles.analyzeButton, styles.buttonLayout]}
            onPress={() =>
              Alert.alert("Análise iniciada", "Analisando a foto...")
            }
          >
            <Text style={styles.anlisesTypo}>Analisar Foto</Text>
          </Pressable>
        )}

        {/* Botão "Histórico de Análises" movido para o rodapé */}
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
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  anlisesWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  anlisesTypo: {
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
    position: "absolute",
    top: "6.57%",
    right: "5.03%",
    width: 120, // Ajuste a largura conforme necessário
    height: 120, // Ajuste a altura conforme necessário
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  personcropcirclefillImage: {
    width: "100%", // A imagem ocupa 100% do espaço do botão
    height: "100%", // A imagem ocupa 100% do espaço do botão
  },
  histticoDeAnlises: {
    width: 300,
  },
  histticoDeAnlisesWrapper: {
    width: 300,
    height: 42,
  },
  button5: {
    bottom: 50, // Posiciona o botão "Histórico de Análises" no rodapé
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
  analyzeButton: {
    top: 500, // Ajuste a altura conforme necessário para posicionar o botão "Analisar Foto" mais próximo da imagem
    left: 50,
  },
  inserirAmostra: {
    backgroundColor: Color.schemesOnTertiary,
    flex: 1,
    overflow: "hidden",
    height: "100%",
  },
});

export default InserirAmostra;
