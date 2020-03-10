import React from "react";
import {StyleSheet, Text, View, Button, FlatList} from "react-native";

import api from "../api";
import Spinner from "../../ui/feedback/Spinner";

export default function DashboardScreen({navigation}) {
  const [status, setStatus] = React.useState("pending");
  const [hours, setHours] = React.useState([]);

  React.useEffect(() => {
    api.fetch().then((hours) => {
      setHours(hours);
      setStatus("resolved");
    });
  }, []);

  if (status === "pending") return <Spinner />;

  return (
    <View style={styles.container}>
      {hours.length ? (
        <FlatList
          data={hours}
          keyExtractor={({id}) => String(id)}
          renderItem={({item: {project, working_hour_category, hours}}) => (
            <Text>
              {project.name} - {working_hour_category.name} - {hours}
            </Text>
          )}
        />
      ) : (
        <Text>No hay horas cargadas</Text>
      )}
      <Button title="Registrar horas" onPress={() => navigation.navigate("Register")} />
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
