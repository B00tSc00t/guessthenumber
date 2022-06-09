import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    borderColor: "white",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 25,
    maxWidth: "80%",
    padding: 12,
    textAlign: "center",
    width: 300,
  },
});
