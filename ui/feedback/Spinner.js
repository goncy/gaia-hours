import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Spinner() {
  return (
    <View style={styles.container}>
      <Text>Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
