import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  itemText: {
    fontFamily: "open-sans",
  },
  listItem: {
    backgroundColor: Colors.accent500,
    borderColor: Colors.primary700,
    borderRadius: 40,
    borderWidth: 1,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 12,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    width: "100%",
  },
});
