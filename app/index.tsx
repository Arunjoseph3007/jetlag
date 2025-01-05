import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { vh, vw } from "@/utils/screen";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { router } from "expo-router";

export default function HomeScreen() {
  const [code, setCode] = useState("");

  // callbacks
  const join = () => {
    console.log("join", code);
    router.push("/lobby");
  };

  const create = () => {
    console.log("create");
    router.push("/lobby");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Welcome 👋
      </ThemedText>

      <ThemedView style={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={styles.profilePic}
        />
        <TouchableOpacity onPress={() => console.log("press")}>
          <MaterialIcons size={18} name="edit" style={styles.editIcon} />
        </TouchableOpacity>
      </ThemedView>

      <TextInput
        onChangeText={(t) => setCode(t)}
        placeholder="Join Code"
        placeholderTextColor={Colors.gray}
        keyboardType="numeric"
        style={styles.input}
        onSubmitEditing={join}
      />

      <ThemedView style={styles.btnConatiner}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: Colors.accentPink }]}
          onPress={join}
        >
          <ThemedText darkColor={Colors.black} style={styles.btnText}>
            JOIN
          </ThemedText>
        </TouchableOpacity>

        <ThemedText style={styles.or}>OR</ThemedText>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: Colors.accentGreen }]}
          onPress={create}
        >
          <ThemedText darkColor={Colors.black} style={styles.btnText}>
            CREATE
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: vh(15),
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.background,
    gap: 25,
  },
  title: {
    textAlign: "center",
    lineHeight: 45,
    fontSize: 40,
  },
  imgContainer: {
    position: "relative",
  },
  profilePic: {
    height: vh(20),
    aspectRatio: 1,
    borderRadius: vh(100),
  },
  editIcon: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: Colors.white,
    borderRadius: 1000,
    padding: 6,
  },
  input: {
    width: vw(75),
    borderColor: Colors.grayTint,
    borderWidth: 1.5,
    borderRadius: 5,
    paddingInline: 5,
    marginBottom: 20,
  },
  btnConatiner: {
    alignItems: "center",
    gap: 15,
  },
  btn: {
    width: vw(75),
    alignItems: "center",
    padding: 12,
    borderRadius: 5,
  },
  btnText: {
    letterSpacing: 2,
    fontWeight: 500,
  },
  or: {
    color: Colors.grayTint,
    fontSize: 10,
    fontWeight: 700,
  },
});
