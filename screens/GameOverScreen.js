import {
  useWindowDimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function GameOverSreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 400) {
    imageSize = 150;
  }

  if (height < 420) {
    imageSize = 120;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverSreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    borderColor: Colors.primary700,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    // height: deviceWidth < 380 ? 150 : 300,
    margin: 36,
    overflow: "hidden",
    // width: deviceWidth < 380 ? 150 : 300,
  },
  rootContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  screen: {
    flex: 1,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
});
