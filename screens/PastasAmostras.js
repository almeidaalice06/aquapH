import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { Alert } from "react-native";


const PastasAmostras = () => {
  const navigation = useNavigation();

  // State to keep track of buttons
  const [buttons, setButtons] = React.useState([]);

  // Function to handle adding a new button
  const handleCreatePasta = () => {
    if (buttons.length < 7) {
      const newButton = {
        id: buttons.length + 1,
        title: `Pasta ${buttons.length + 1}`,
        creationDate: new Date().toLocaleDateString(), // Adding creation date
      };
      setButtons((prevButtons) => [...prevButtons, newButton]);
    } else {
      Alert.alert("Limite atingido", "Você já criou 5 pastas.");
    }
  };


  return (
    <View style={[styles.pastasAmostras, styles.iconLayout]}>
      <View
        style={[styles.pastasAmostrasChild, styles.histricoDeAnlisesLayout]}
      />

      <View style={[styles.button5, styles.button5FlexBox]}>
        <View style={[styles.criarPastaWrapper, styles.button5FlexBox]}>
          <Pressable
            style={[styles.button4, styles.button4FlexBox]}
            onPress={handleCreatePasta} // Calls the function to add a new button
          >
            <View style={styles.button4FlexBox}>
              <Text style={[styles.criarPasta, styles.criarPastaFlexBox]}>
                Criar Pasta
              </Text>
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

      {/* Components - button list below */}
      <View style={styles.buttonList}>
        {buttons.map((button) => (
          <Pressable
            key={button.id}
            style={[styles.dynamicButton, styles.button4FlexBox]}
          >
            <Text style={styles.buttonText}>
              {button.title} - {button.creationDate}
            </Text>
          </Pressable>
        ))}
      </View>

      <Image
        style={styles.personcropcirclefillIcon}
        contentFit="cover"
        source={require("../assets/personcropcirclefill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-start", // Align text to the left
    padding: 10,
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
  buttonList: {
    marginTop: 160, // Adjust this as needed to space buttons properly
    paddingHorizontal: 20,
  },
  dynamicButton: {
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xl,
    paddingVertical: Padding.p_lg,
    marginBottom: 10,
    alignItems: "left",
  },
  buttonText: {
    fontSize: FontSize.defaultBoldTitle3_size,
    color: Color.schemesOnTertiary,
    paddingLeft: 30,
  },
});

export default PastasAmostras;
