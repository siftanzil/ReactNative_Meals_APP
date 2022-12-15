import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import MealDetailScreen from "./MealDetailScreen";

const MealsOverviewScreen = ({ route, navigation }) => {
   const catId = route.params.categoryId;

   const displayMeals = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(catId) >= 0;
   });

   useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find(
         (category) => category.id === catId,
      ).title;

      navigation.setOptions({ title: categoryTitle });
   }, [catId, navigation]);

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
            data={displayMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
         />
      </View>
   );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
   },
});
