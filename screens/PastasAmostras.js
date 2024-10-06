import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PastasAmostras = () => {
  const navigation = useNavigation();

  // State to keep track of buttons
  const [buttons, setButtons] = useState([]);
  const [folderName, setFolderName] = useState(""); // State to store the folder name

  // Load folders from AsyncStorage when the component mounts
  React.useEffect(() => {
    const loadButtons = async () => {
      try {
        const savedButtons = await AsyncStorage.getItem("buttons");
        if (savedButtons) {
          setButtons(JSON.parse(savedButtons));
        }
      } catch (error) {
        console.error("Failed to load buttons from AsyncStorage", error);
      }
    };
    loadButtons();
  }, []);

  // Function to handle adding a new button
  const handleCreatePasta = async () => {
    if (buttons.length < 7) {
      if (folderName.trim() === "") {
        Alert.alert("Nome inválido", "Por favor, insira um nome para a pasta.");
        return;
      }

      const newButton = {
        id: Date.now(), // Use a unique ID based on current time
        title: folderName, // Use the folder name entered by the user
        creationDate: new Date().toLocaleDateString(),
      };
      const updatedButtons = [...buttons, newButton];
      setButtons(updatedButtons);

      // Save the updated buttons to AsyncStorage
      try {
        await AsyncStorage.setItem("buttons", JSON.stringify(updatedButtons));
        setFolderName(""); // Clear the input after creating the folder
      } catch (error) {
        console.error("Failed to save buttons to AsyncStorage", error);
      }
    } else {
      Alert.alert("Limite atingido", "Você já criou 7 pastas.");
    }
  };

  // Function to handle deleting a button
  const handleDeletePasta = async (id) => {
    const updatedButtons = buttons.filter((button) => button.id !== id);
    setButtons(updatedButtons);

    // Save the updated buttons to AsyncStorage
    try {
      await AsyncStorage.setItem("buttons", JSON.stringify(updatedButtons));
    } catch (error) {
      console.error("Failed to save buttons to AsyncStorage", error);
    }
  };

  return (
    <View style={[styles.pastasAmostras, styles.iconLayout]}>
      <View
        style={[styles.pastasAmostrasChild, styles.histricoDeAnlisesLayout]}
      />

      <Text style={[styles.histricoDeAnlises, styles.criarPastaFlexBox]}>
        Histórico de Análises
      </Text>

      <View style={styles.buttonList}>
        {buttons.map((button) => (
          <View
            key={button.id} // Ensure each key is the unique ID of the button
            style={styles.dynamicButtonContainer}
          >
            <Pressable style={[styles.dynamicButton, styles.button4FlexBox]}>
              <Text style={styles.buttonText}>
                {button.title} - {button.creationDate}
              </Text>
            </Pressable>
            <Pressable
              style={styles.deleteButton}
              onPress={() => handleDeletePasta(button.id)} // Pass correct ID to delete function
            >
              <Text style={styles.deleteButtonText}>Deletar</Text>
            </Pressable>
          </View>
        ))}
      </View>

      <View style={[styles.createFolderContainer, styles.button5FlexBox]}>
        <TextInput
          style={styles.input}
          placeholder="Nome da Pasta"
          value={folderName}
          onChangeText={setFolderName} // Update folder name in state
        />
        <Pressable
          style={[styles.button4, styles.button4FlexBox]}
          onPress={handleCreatePasta}
        >
          <Text style={[styles.criarPasta, styles.criarPastaFlexBox]}>
            Criar Pasta
          </Text>
        </Pressable>
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

      {/* New "Voltar" Button */}
      <Pressable
        style={styles.voltarButton}
        onPress={() => navigation.navigate("InserirAmostra")}
      >
        <Text style={styles.voltarButtonText}>Voltar</Text>
      </Pressable>

      <Image
        style={styles.personcropcirclefillIcon}
        contentFit="cover"
        source={require("../assets/personcropcirclefill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "white", // Definir como transparente
    color: "black", // Texto preto
    width: 200,
    marginBottom: 10,
    textAlign: "center",
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
  createFolderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button4: {
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: 20,
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
  buttonList: {
    marginTop: 160, // Adjust this as needed to space buttons properly
    paddingHorizontal: 20,
  },
  dynamicButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  dynamicButton: {
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
    paddingVertical: Padding.p_lg,
    paddingLeft: 30,
    flex: 1,
  },
  buttonText: {
    fontSize: FontSize.defaultBoldTitle3_size,
    color: Color.schemesOnTertiary,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: Padding.p_lg,
    borderRadius: Border.br_11xl,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  voltarButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: Border.br_11xl,
  },
  voltarButtonText: {
    color: "white",
    fontSize: FontSize.defaultBoldTitle3_size,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    width: "100%",
  },
});

export default PastasAmostras;
