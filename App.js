import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  Alert,
} from "react-native";
import player from "react-native-sound-player";

export default function App() {
  function playMp3() {
    try {
      player.playSoundFile("phutinh", "mp3");
    } catch (e) {
      Alert.alert("Không thể phát nhạc!!!");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Ứng dụng nghe nhạc</Text>
      </View>
      <View style={styles.header}>
        <Text>Phụ tình - Trịnh Đình Quang</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.play}>
          <TouchableOpacity>
            <Image
              source={require("./assets/directional.png")}
              style={styles.imagePrev}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={playMp3}>
            <Image
              source={require("./assets/multimedia.png")}
              style={styles.imagePause}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/arrows.png")}
              style={styles.imageNext}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "rgb(155, 61, 155)",
  },
  header: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    paddingTop: 550,
  },
  play: {
    display: "flex",
    flexDirection: "row",
  },
  imagePrev: {
    width: 50,
    height: 50,
    marginRight: 40,
  },
  imagePause: {
    width: 50,
    height: 50,
  },
  imageNext: {
    width: 50,
    height: 50,
    marginLeft: 40,
  },
});
