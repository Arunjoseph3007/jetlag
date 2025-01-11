import { type MapMarkerProps, Marker } from "react-native-maps";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ThemedView } from "../common/ThemedView";
import { Image, StyleSheet } from "react-native";

type PlayerMarkerProps = { imageSrc: string } & MapMarkerProps;

export default function PlayerMarker({
  imageSrc,
  ...markerProps
}: PlayerMarkerProps) {
  return (
    <Marker {...markerProps}>
      <ThemedView style={styles.circle}>
        <ThemedView style={styles.tail} />
        <Image source={{ uri: imageSrc }} style={styles.image} />
      </ThemedView>
    </Marker>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: Colors.black,
    width: 28,
    aspectRatio: 1,
    borderRadius: 1000,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  tail: {
    position: "absolute",
    width: "50%",
    aspectRatio: 1,
    backgroundColor: Colors.black,
    top: "100%",
    left: "50%",
    borderRadius: 2,
    transform: [
      { translateX: "-50%" },
      { translateY: "-80%" },
      { rotate: "45deg" },
    ],
  },
  image: {
    height: 21,
    aspectRatio: 1,
    borderRadius: 1000,
  },
});
