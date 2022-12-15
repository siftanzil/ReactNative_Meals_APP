import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
   return (
      <View style={styles.subtitleContainer}>
         <Text style={styles.subtitle}>{children}</Text>
      </View>
   );
};

export default Subtitle;

const styles = StyleSheet.create({
   subtitle: {
      color: "Black",
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "center",
   },
   subtitleContainer: {
      padding: 6,
      margin: 12,
      borderBottomColor: "Wheat",
      borderBottomWidth: 2,
   },
});
