import React from "react";
import {StyleSheet, Text, View, Button, FlatList} from "react-native";

import Spinner from "../../ui/feedback/Spinner";
import {useHours} from "../hooks";

export default function DashboardScreen({navigation}) {
  const {hours, isLoading, list} = useHours();

  React.useEffect(() => {
    list();
  }, [list]);

  if (isLoading) return <Spinner />;

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
