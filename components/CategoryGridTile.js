import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color, onPress }) => {
   return (
      <View style={[styles.gridItem, { backgroundColor: color }]}>
         <Pressable
            onPress={onPress}
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [
               styles.button,
               pressed ? styles.buttonPressed : null,
            ]}>
            <View style={styles.innerContainer}>
               <Text style={styles.title}>{title}</Text>
            </View>
         </Pressable>
      </View>
   );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
   gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      elevation: 10,
      shadowColor: "violet",
   },
   button: {
      flex: 1,
   },
   buttonPressed: {
      opacity: 0.5,
   },
   innerContainer: {
      flex: 1,
      padding: 16,
      justifyContent: "center",
      alignItems: "center",
   },
   title: {
      fontSize: 18,
      fontWeight: "bold",
   },
});
