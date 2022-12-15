import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { ScrollView } from "react-native";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favoritesContext";

const MealDetailScreen = ({ route, navigation }) => {
   // const favoriteMealsContext = useContext(FavoritesContext);

   const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
   const dispatch = useDispatch();

   const mealId = route.params.mealId;
   const selectedMeal = MEALS.find((meal) => meal.id === mealId);

   // const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
   const mealIsFavorite = favoriteMealIds.includes(mealId);

   const changeFavoriteStatusHandler = () => {
      if (mealIsFavorite) {
         // favoriteMealsContext.removeFavorite(mealId);
         dispatch(removeFavorite({ id: mealId }));
      } else {
         // favoriteMealsContext.addFavorite(mealId);
         dispatch(addFavorite({ id: mealId }));
      }
   };

   useLayoutEffect(() => {
      navigation.setOptions({
         headerRight: () => {
            return (
               <IconButton
                  icon={mealIsFavorite ? "star" : "star-outline"}
                  color="white"
                  onPress={changeFavoriteStatusHandler}
               />
            );
         },
      });
   }, [navigation, changeFavoriteStatusHandler]);

   return (
      <ScrollView>
         <View style={styles.container}>
            <Image
               source={{ uri: selectedMeal.imageUrl }}
               style={styles.image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
               duration={selectedMeal.duration}
               complexity={selectedMeal.complexity}
               affordability={selectedMeal.affordability}
               textStyle={styles.detailText}
            />
            <View style={styles.listContainer}>
               <Subtitle>Ingredient</Subtitle>
               <List data={selectedMeal.ingredients} />

               <Subtitle>Steps</Subtitle>
               <List data={selectedMeal.steps} />
            </View>
         </View>
      </ScrollView>
   );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      marginBottom: 32,
   },
   image: {
      width: "100%",
      height: 350,
   },
   title: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 24,
      padding: 8,
   },
   detailText: {
      color: "Black",
      fontWeight: "bold",
   },
   listContainer: {
      width: "80%",
   },
});
