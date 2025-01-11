import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { Colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { LatLng } from "react-native-maps";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { MapStyles } from "@/utils/map";
import PlayerMarker from "@/components/maps/PlayerMarker";
import { distanceBetweenCoords } from "@/utils/geo";
import { kmsFormat, timeDiff } from "@/utils/units";

const startTime = new Date(new Date().getTime() - 1000 * 60 * 48);

export default function ChaserScreen() {
  const [time, setTime] = useState("");
  const [runnerLoc, setRunnerLoc] = useState<LatLng>({
    latitude: 19.25839,
    longitude: 73.118075,
  });
  const [chaserLoc, setChaserLoc] = useState<LatLng>({
    latitude: 18.9067,
    longitude: 72.8147,
  });
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setDistance(distanceBetweenCoords(runnerLoc, chaserLoc));
  }, [runnerLoc, chaserLoc]);

  useEffect(() => {
    const itv = setInterval(() => setTime(timeDiff(startTime)));

    return () => {
      clearInterval(itv);
    };
  }, []);

  return (
    <ThemedView style={styles.container}>
      <MapView
        rotateEnabled={false}
        customMapStyle={MapStyles}
        style={styles.map}
      >
        <PlayerMarker
          coordinate={runnerLoc}
          imageSrc="https://picsum.photos/200/300?random=runner"
        />
        <PlayerMarker
          coordinate={chaserLoc}
          imageSrc="https://picsum.photos/200/300?random=chaser"
        />
      </MapView>

      <ThemedView
        dir="row"
        alignItems="center"
        style={styles.header}
        bg={Colors.black}
      >
        <ThemedText size="lg" style={styles.chaserText}>
          Chasers
        </ThemedText>
        <Entypo name="stopwatch" size={16} color={Colors.white} />
        <ThemedText size="lg">{time}</ThemedText>
      </ThemedView>

      <BottomSheet
        backgroundStyle={{ backgroundColor: Colors.black }}
        handleIndicatorStyle={{ backgroundColor: Colors.grayTint }}
        snapPoints={[150, 350]}
      >
        <BottomSheetView style={styles.bottomSheet}>
          <ThemedText>
            You are just{" "}
            <ThemedText weight={900} color={Colors.accentGreen}>
              {kmsFormat(distance)}
            </ThemedText>{" "}
            away from the runner{" "}
          </ThemedText>
        </BottomSheetView>
      </BottomSheet>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
    paddingTop: 26,
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
