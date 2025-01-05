import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { Colors } from "@/constants/Colors";
import { vw } from "@/utils/screen";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { MapStyles } from "@/utils/map";

const startTime = new Date(new Date().getTime() - 1000 * 60 * 48);

const timeDiff = (a: Date) => {
  let diff = new Date().getTime() - a.getTime();

  diff = Math.floor(diff / 1000);
  const secs = (diff % 60).toString().padStart(2, "0");
  diff = Math.floor(diff / 60);
  const mins = (diff % 60).toString().padStart(2, "0");
  diff = Math.floor(diff / 60);
  const hrs = diff % 60;

  return `${hrs}:${mins}:${secs}`;
};

export default function ChaserScreen() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const itv = setInterval(() => setTime(timeDiff(startTime)));

    return () => {
      clearInterval(itv);
    };
  }, []);

  return (
    <ThemedView style={styles.container}>
      <MapView customMapStyle={MapStyles} style={styles.map} />

      <ThemedView
        dir="row"
        alignItems="center"
        style={styles.header}
        bg={Colors.accentPink}
      >
        <ThemedText size="lg" style={styles.chaserText} color={Colors.black}>
          Chasers
        </ThemedText>
        <Entypo name="stopwatch" size={20} color={Colors.black} />
        <ThemedText size="lg" color={Colors.black}>
          {time}
        </ThemedText>
      </ThemedView>

      <BottomSheet
        backgroundStyle={{ backgroundColor: Colors.black }}
        handleIndicatorStyle={{ backgroundColor: Colors.grayTint }}
        snapPoints={[150, 350]}
      >
        <BottomSheetView style={styles.bottomSheet}>
          <ThemedText>Awesome 🎉</ThemedText>
        </BottomSheetView>
      </BottomSheet>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  header: {
    padding: 10,
    borderRadius: 5,
    gap: 4,
    position: "absolute",
    top: 50,
    insetInline: 15,

    borderColor: Colors.black,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  chaserText: {
    flex: 1,
  },

  map: {
    width: "100%",
    height: "100%",
  },
});
