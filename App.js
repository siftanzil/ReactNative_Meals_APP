import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";

import CatagoriesScreen from "./screens/CatagoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createStackNavigator();

export default function App() {
   return (
      <>
         <StatusBar style="dark" />
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerStyle: { backgroundColor: "brown" },
                  headerTintColor: "white",
                  cardStyle: { backgroundColor: "wheat" },
               }}>
               <Stack.Screen
                  name="MealsCategories"
                  component={CatagoriesScreen}
                  options={{
                     title: "All Categories",
                  }}
               />
               <Stack.Screen
                  name="MealsOverview"
                  component={MealsOverviewScreen}
               />
               <Stack.Screen
                  name="MealDetails"
                  component={MealDetailScreen}
                  options={{
                     headerRight: () => {
                        return <Button title="Tap Tap!" />;
                     },
                  }}
               />
            </Stack.Navigator>
         </NavigationContainer>
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
