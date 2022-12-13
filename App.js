import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import CatagoriesScreen from "./screens/CatagoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createStackNavigator();

export default function App() {
   return (
      <>
         <StatusBar style="dark" />
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen
                  name="MealsCategories"
                  component={CatagoriesScreen}
               />
               <Stack.Screen
                  name="MealsOverview"
                  component={MealsOverviewScreen}
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
