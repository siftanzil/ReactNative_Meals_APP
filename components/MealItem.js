import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
   return (
      <View style={styles.mealItem}>
         <Pressable android_ripple={{ color: "pink" }}>
            <View>
               <Image source={{ uri: imageUrl }} style={styles.image} />
               <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.detail}>
               <Text style={styles.detailItem}>{duration}</Text>
               <Text style={styles.detailItem}>{complexity}</Text>
               <Text style={styles.detailItem}>{affordability}</Text>
            </View>
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
   detail: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
   },
   detailItem: {
      marginHorizontal: 4,
      fontSize: 12,
   },
});
