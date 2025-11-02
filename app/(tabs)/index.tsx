import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../components/context/auth-context"; // ajusta la ruta si es necesario

export default function TabsScreen() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("AuthContext no encontrado");

  const nombreUsuario = auth.email ? auth.email.split("@")[0] : "Usuario";

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007bff" style={styles.spinner} />
      <Text style={styles.text}>
        Hola, {nombreUsuario}!{"\n"}
        Aplicación en desarrollo{"\n"}
        Atento a próximas actualizaciones 🚀
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  spinner: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#333",
    fontWeight: "600",
  },
});



