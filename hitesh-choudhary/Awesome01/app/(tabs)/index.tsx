import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? "#000000" : "#ffffff" }}>
      <View style={styles.container}>
        <Text style={isDarkMode? styles.whiteText: styles.darkText}>Hello, World!</Text>
        <Text style={isDarkMode? styles.whiteText: styles.darkText}>Hello, World!</Text>
        <Text style={isDarkMode? styles.whiteText: styles.darkText}>Hello, World!</Text>
        <Text style={isDarkMode? styles.whiteText: styles.darkText}>Hello, World!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
  },
  whiteText: {
    color: "#ffffff"
  },
  darkText: {
    color: "#000000"
  }
})