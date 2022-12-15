import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favoritesContext";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
   // const favoriteMealsContext = useContext(FavoritesContext);
   const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

   const favoriteMeals = MEALS.filter((meal) =>
      favoriteMealIds.includes(meal.id),
   );
   // favoriteMealsContext.ids.includes(meal.id)

   if (favoriteMeals.length === 0) {
      return (
         <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
         </View>
      );
   }

   return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
   rootContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   text: {
      fontSize: 18,
      fontWeight: "bold",
      color: "brown",
   },
});
