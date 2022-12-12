import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CatagoriesScreen from "./screens/CatagoriesScreen";

export default function App() {
   return (
      <>
         <StatusBar style="inverted" />
         <CatagoriesScreen />
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      color: "white",
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
   },
});
