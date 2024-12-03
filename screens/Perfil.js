import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  Modal,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // Estado para a imagem do perfil
  const [userName, setUserName] = useState("Usuário pH"); // Estado para o nome do usuário
  const [userEmail, setUserEmail] = useState("usuarioph@gmail.com"); // Estado para o e-mail
  const [isModalVisible, setIsModalVisible] = useState(false); // Controle do modal
  const [newName, setNewName] = useState(userName); // Estado temporário para novo nome
  const [newEmail, setNewEmail] = useState(userEmail); // Estado temporário para novo e-mail

  // Função para alternar notificações
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    Alert.alert(
      "Notificações",
      notificationsEnabled
        ? "Notificações desativadas!"
        : "Notificações ativadas!"
    );
  };

  // Função para escolher imagem
  const handleChoosePhoto = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permissão negada", "É necessário acesso à galeria.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Define a nova imagem
    }
  };

  // Função para capturar foto
  const handleTakePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permissão negada", "É necessário acesso à câmera.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Define a nova imagem
    }
  };

  // Função de logout e redirecionamento para a página inicial
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Você realmente deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: () => {
            navigation.navigate("PaginaInicial"); // Redireciona para a página inicial
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Função para salvar atualizações no modal
  const handleSaveProfile = () => {
    setUserName(newName);
    setUserEmail(newEmail);
    setIsModalVisible(false);
    Alert.alert("Perfil atualizado!", "Nome e e-mail foram alterados.");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : { uri: "https://via.placeholder.com/100" }
          }
          style={styles.profileImage}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleTakePhoto}>
        <Text style={styles.changePhotoText}>Tirar nova foto</Text>
      </TouchableOpacity>

      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userEmail}>{userEmail}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.buttonText}>Atualizar perfil</Text>
      </TouchableOpacity>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Ativar notificações</Text>
        <TouchableOpacity
          style={[
            styles.toggleSwitch,
            notificationsEnabled && styles.toggleSwitchActive,
          ]}
          onPress={toggleNotifications}
        >
          <View
            style={[
              styles.toggleIndicator,
              notificationsEnabled && styles.toggleIndicatorActive,
            ]}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

      {/* Modal para editar nome e e-mail */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>
            <TextInput
              style={styles.input}
              placeholder="Novo nome"
              value={newName}
              onChangeText={setNewName}
            />
            <TextInput
              style={styles.input}
              placeholder="Novo e-mail"
              value={newEmail}
              onChangeText={setNewEmail}
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changePhotoText: {
    color: "#007b8f",
    fontWeight: "bold",
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
    marginVertical: 10,
  },
  userEmail: {
    color: "#888",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007b8f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 15,
  },
  toggleLabel: {
    color: "#ffffff",
    fontSize: 16,
  },
  toggleSwitch: {
    width: 40,
    height: 20,
    backgroundColor: "#555",
    borderRadius: 10,
    justifyContent: "center",
    padding: 3,
  },
  toggleSwitchActive: {
    backgroundColor: "#007b8f",
  },
  toggleIndicator: {
    width: 14,
    height: 14,
    backgroundColor: "#ffffff",
    borderRadius: 7,
  },
  toggleIndicatorActive: {
    alignSelf: "flex-end",
  },
  logoutButton: {
    backgroundColor: "#555",
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
  },
  cancelButton: {
    backgroundColor: "#555",
    marginTop: 10,
  },
});
