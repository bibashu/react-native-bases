import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Human } from "./human/Human";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { style } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Human
          firstName={"joe"}
          age={22}
          isHappy={function () {
            alert("hello");
          }}
        >
          <Image
            style={{ height: 300, width: 300 }}
            source={{ url: "https://picsum.photos/id/237/200/200" }}
          />
        </Human>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
