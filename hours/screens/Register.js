import React from "react";
import {StyleSheet, Alert, Text, View, Button, TextInput, Picker} from "react-native";

import api from "../api";
import catalogsApi from "../../catalogs/api";
import Spinner from "../../ui/feedback/Spinner";

export default function RegisterScreen({navigation, session}) {
  const [project, setProject] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const [hours, setHours] = React.useState(0);
  const [catalogs, setCatalogs] = React.useState(null);
  const [status, setStatus] = React.useState("pending");

  function register() {
    setStatus("pending");

    api
      .register(session.user.id, project, category, hours)
      .then(() => {
        Alert.alert("Correct", "Las horas se registraron correctamente");

        navigation.navigate("Dashboard");
      })
      .catch(() => setStatus("resolved"));
  }

  React.useEffect(() => {
    catalogsApi.fetch().then((catalogs) => {
      setCatalogs(catalogs);
      setStatus("resolved");
    });
  }, []);

  if (status === "pending") return <Spinner />;

  const [projects, categories] = catalogs;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Categoria</Text>
        <Picker selectedValue={category} style={{width: 160}} onValueChange={(category) => setCategory(category)}>
          {categories.map(({id, name}) => (
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>
        <Text>Proyecto</Text>
        <Picker selectedValue={project} style={{width: 160}} onValueChange={(project) => setProject(project)}>
          {projects.map(({id, name, total_hours}) => (
            <Picker.Item key={id} label={`${name} - ${total_hours}`} value={id} />
          ))}
        </Picker>
        <Text>Horas</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Horas"
          value={String(hours)}
          onChangeText={(hours) => setHours(Number(hours))}
        />
      </View>
      <Button title="Registrar" onPress={register} />
      <Button title="Listado de horas" onPress={() => redirect("Dashboard")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
