import React from "react";
import {StyleSheet, Alert, Text, View, Button, TextInput, Picker} from "react-native";

import {useUser} from "../../session/hooks";
import catalogsApi from "../../catalogs/api";
import Spinner from "../../ui/feedback/Spinner";
import api from "../api";

export default function RegisterScreen({navigation}) {
  const [project, setProject] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const [hours, setHours] = React.useState(0);
  const [catalogs, setCatalogs] = React.useState(null);
  const [status, setStatus] = React.useState("pending");

  const user = useUser();

  function register() {
    setStatus("pending");

    api
      .register(user.id, project, category, hours)
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
          {projects.map(({id, name}) => (
            <Picker.Item key={id} label={name} value={id} />
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
      <Button title="Listado de horas" onPress={() => navigation.navigate("Dashboard")} />
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
