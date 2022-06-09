import { Dimensions, StyleSheet, View } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 27,
    padding: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
