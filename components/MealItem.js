import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import MealDetails from "./MealDetails";

const MealItem = ({
   title,
   imageUrl,
   duration,
   complexity,
   affordability,
   onPress,
}) => {
   return (
      <View style={styles.mealItem}>
         <Pressable android_ripple={{ color: "pink" }} onPress={onPress}>
            <View>
               <Image source={{ uri: imageUrl }} style={styles.image} />
               <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails
               duration={duration}
               complexity={complexity}
               affordability={affordability}
            />
         </Pressable>
      </View>
   );
};

export default MealItem;

const styles = StyleSheet.create({
   mealItem: {
      margin: 16,
      borderRadius: 8,
      overflow: "hidden",
      backgroundColor: "white",
      elevation: 10,
      shadowColor: "black",
   },
   image: {
      width: "100%",
      height: 200,
   },
   title: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 18,
      padding: 8,
   },
});
