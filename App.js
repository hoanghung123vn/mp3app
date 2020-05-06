import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  Alert,
} from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const soundObject = new Audio.Sound();
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        await soundObject.loadAsync(require("./assets/phutinh.mp3"));
      } catch (error) {
        Alert.alert("Không thể phát nhạc");
      }
    })();
  }, []);

  async function togglePlay() {
    if (isPlay) {
      await soundObject.stopAsync();
      setIsPlay(false);
    } else {
      await soundObject.playAsync();
      setIsPlay(true);
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
          <TouchableOpacity onPress={togglePlay}>
            <Image
              source={
                isPlay
                  ? require("./assets/multimedia.png")
                  : require("./assets/pause.png")
              }
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
