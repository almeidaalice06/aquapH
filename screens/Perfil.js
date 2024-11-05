import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [shareLink, setShareLink] = useState("");

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

  // Função para compartilhar link
  const handleShareLink = () => {
    if (shareLink) {
      Alert.alert("Link compartilhado:", shareLink);
      setShareLink(""); // Limpa o campo após compartilhar
    } else {
      Alert.alert("Erro", "Por favor, insira um link para compartilhar.");
    }
  };

  // Função de logout
  const handleLogout = () => {
    Alert.alert("Logout", "Você saiu da conta.");
    // Aqui você pode adicionar o redirecionamento ou outras ações de logout
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/100" }}
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Usuário pH</Text>
      <Text style={styles.userEmail}>usuarioph@gmail.com</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Atualizar Perfil")}
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

      <View style={styles.shareContainer}>
        <TextInput
          style={styles.shareInput}
          placeholder="Enviar link"
          placeholderTextColor="#888"
          value={shareLink}
          onChangeText={setShareLink}
        />
        <TouchableOpacity
          style={[styles.button, styles.shareButton]}
          onPress={handleShareLink}
        >
          <Text style={styles.buttonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
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
  shareContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },
  shareInput: {
    flex: 1,
    backgroundColor: "#333",
    color: "#ffffff",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  shareButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  logoutButton: {
    backgroundColor: "#555",
    marginTop: 20,
  },
});
