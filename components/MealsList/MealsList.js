import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ items }) => {
   const navigation = useNavigation();

   const renderMealItem = (itemData) => {
      const item = itemData.item;

      const mealItemProps = {
         title: item.title,
         imageUrl: item.imageUrl,
         duration: item.duration,
         complexity: item.complexity,
         affordability: item.affordability,
      };

      const pressHandler = () => {
         navigation.navigate("MealDetails", {
            mealId: item.id,
         });
      };

      return <MealItem {...mealItemProps} onPress={pressHandler} />;
   };
   return (
      <View style={styles.container}>
         <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
         />
      </View>
   );
};

export default MealsList;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
   },
});
