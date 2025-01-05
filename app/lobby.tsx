import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { Colors } from "@/constants/Colors";
import { vh, vw } from "@/utils/screen";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";

const randomColor = () =>
  "#" + Math.floor((Math.random() + 1) * (0xffffff / 2)).toString(16);

const code = Math.floor(performance.now()).toString().slice(0, 6);
const seedPlayers = new Array(6).fill(0).map((_, i) => ({
  id: i,
  name: "Player " + i,
  profilePic: "https://picsum.photos/200/300?random=" + i,
  color: randomColor(),
}));

export default function LobbyScreen() {
  const myId = 0;
  const adminId = 0;
  const [players, setPlayers] = useState(seedPlayers);
  const [hiderId, setHiderId] = useState(0);

  const copyCode = () => {
    Clipboard.setStringAsync(code);
  };

  const start = () => {
    console.log("start");
    router.push("/");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.codeBox}>
        <ThemedText style={styles.code} color={Colors.black}>
          {code}
        </ThemedText>
        <TouchableOpacity onPress={copyCode}>
          <MaterialIcons name="copy-all" size={30} color={Colors.black} />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.lobbyBox}>
        <ThemedText style={styles.title}>
          {players.length} Player Joined
        </ThemedText>
        <ThemedText style={styles.subTitle}>
          Waiting for other to join
        </ThemedText>

        <FlatList
          data={players}
          style={styles.playersList}
          keyExtractor={(p) => p.id.toString()}
          renderItem={({ item: player }) => (
            <TouchableOpacity
              disabled={adminId != myId}
              style={styles.playerBox}
              onPress={() => setHiderId(player.id)}
            >
              <Image src={player.profilePic} style={styles.profilePic} />
              {hiderId == player.id && (
                <MaterialIcons
                  name="directions-run"
                  size={20}
                  color={Colors.accentGreen}
                />
              )}
              <ThemedText style={styles.playerName}>{player.name}</ThemedText>
              <ThemedView style={styles.colorBox} bg={player.color} />
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity onPress={start} style={styles.startBtn}>
          <ThemedText style={styles.startText}>START</ThemedText>
          <MaterialIcons name="chevron-right" size={24} color={Colors.black} />
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    paddingTop: vh(10),
  },
  codeBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: Colors.white,
    padding: 5,
    paddingInline: 10,
    borderRadius: 5,
  },
  code: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 700,
  },
  lobbyBox: {
    width: vw(75),
    marginTop: 60,
  },
  title: {
    fontSize: 30,
    lineHeight: 32,
    fontWeight: 500,
  },
  subTitle: {
    color: Colors.gray,
    fontSize: 12,
  },
  playerBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
    padding: 8,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.grayTint,
  },
  playersList: {
    height: vh(40),
  },
  profilePic: {
    height: 25,
    aspectRatio: 1,
    borderRadius: 1000,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 600,
    flex: 1,
  },
  colorBox: {
    height: 20,
    aspectRatio: 1,
    borderRadius: 3,
  },
  startBtn: {
    backgroundColor: Colors.accentPink,
    padding: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  startText: {
    color: Colors.black,
  },
});
