import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FAB from "./components/FAB";

export default function App() {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Counter App - 😎</Text>

      <Text style={styles.textBig}>{count}</Text>

      <FAB
        label="-1"
        onPress={() => setCount(count === 0 ? 0 : count - 1)}
        onLongPress={() => setCount(count - 10)}
        position="left"
      />

      <FAB label="Reset" onPress={() => setCount(0)} />

      <FAB
        label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(count + 10)}
        position="right"
      />

      <StatusBar style="auto" />
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
  textBig: {
    fontSize: 100,
    color: "#65588F",
  },
});
