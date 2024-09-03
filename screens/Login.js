import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <Pressable
        style={[styles.button4, styles.button4FlexBox]}
        onPress={() => navigation.navigate("InserirAmostra")}
      >
        <View style={styles.button4FlexBox}>
          <Text style={[styles.entrar, styles.entrarFlexBox]}>ENTRAR</Text>
        </View>
      </Pressable>
      <Text style={[styles.aquaph, styles.aquaphPosition]}>AquapH</Text>
      <Image
        style={[styles.logoFinal1Icon, styles.aquaphPosition]}
        contentFit="cover"
        source={require("../assets/logo-final-1.png")}
      />
      <View style={styles.inputFieldParent}>
        <InputField
          label="Label"
          description="Description"
          value="Usuário ou email"
          error="Error"
          hasLabel={false}
          hasError={false}
          hasDescription={false}
          inputFieldPosition="absolute"
          inputFieldTop={0}
          inputFieldLeft={1}
          inputFieldWidth={355}
          inputFieldHeight={43}
          valueColor="#1e1e1e"
        />
        <InputField
          label="Label"
          description="Description"
          value="Senha"
          error="Error"
          hasLabel={false}
          hasError={false}
          hasDescription={false}
          inputFieldPosition="absolute"
          inputFieldTop={61}
          inputFieldLeft={0}
          inputFieldWidth={355}
          inputFieldHeight={43}
          valueColor="#1e1e1e"
        />
      </View>
      <Text style={styles.esqueceuASenha}>Esqueceu a senha? Clique aqui</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button4FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  entrarFlexBox: {
    display: "flex",
    color: Color.schemesOnTertiary,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  aquaphPosition: {
    left: 22,
    position: "absolute",
  },
  loginChild: {
    top: 0,
    backgroundColor: Color.colorDarkslategray,
    width: "100%",
    left: 0,
    position: "absolute",
    height: "100%",
  },
  entrar: {
    fontSize: FontSize.defaultBoldTitle3_size,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    width: 217,
    height: 20,
  },
  button4: {
    top: 695,
    left: 86,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_100,
    width: 226,
    height: 46,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_lg,
    position: "absolute",
  },
  aquaph: {
    top: 45,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    width: 341,
    height: 43,
    display: "flex",
    color: Color.schemesOnTertiary,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  logoFinal1Icon: {
    top: 129,
    width: 355,
    height: 352,
  },
  inputFieldParent: {
    top: 539,
    left: 21,
    width: 356,
    height: 104,
    position: "absolute",
  },
  esqueceuASenha: {
    top: 661,
    fontSize: FontSize.bodyBase_size,
    lineHeight: 16,
    fontFamily: FontFamily.bodyBase,
    color: Color.textDefaultTertiary,
    textAlign: "center",
    width: 398,
    left: 0,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.schemesOnTertiary,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: "100%",
  },
});

export default Login;
