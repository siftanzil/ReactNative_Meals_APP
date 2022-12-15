import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";

import CatagoriesScreen from "./screens/CatagoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

// import FavoritesContextProvider from "./store/context/favoritesContext";
import { store } from "./store/redux/store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
   return (
      <Drawer.Navigator
         screenOptions={{
            headerStyle: { backgroundColor: "brown" },
            headerTintColor: "orange",
            sceneContainerStyle: { backgroundColor: "wheat" },
            drawerContentStyle: { backgroundColor: "brown" },
            drawerActiveTintColor: "orange",
            drawerInactiveTintColor: "white",
         }}>
         <Drawer.Screen
            name="Categories"
            component={CatagoriesScreen}
            options={{
               headerShown: true,
               title: "All Categories",
               drawerIcon: ({ color, size }) => (
                  <Ionicons name="list" color={color} size={size} />
               ),
            }}
         />
         <Drawer.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
               drawerIcon: ({ color, size }) => (
                  <Ionicons name="star" color={color} size={size} />
               ),
            }}
         />
      </Drawer.Navigator>
   );
};

export default function App() {
   return (
      <>
         <StatusBar style="dark" />
         {/* <FavoritesContextProvider> */}
         <Provider store={store}>
            <NavigationContainer>
               <Stack.Navigator
                  screenOptions={{
                     headerStyle: {
                        backgroundColor: "brown",
                     },
                     headerTitleAlign: "center",
                     headerTintColor: "orange",
                     cardStyle: {
                        backgroundColor: "wheat",
                     },
                  }}>
                  <Stack.Screen
                     name="Drawer"
                     component={DrawerNavigator}
                     options={{
                        headerShown: false,
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
         </Provider>
         {/* </FavoritesContextProvider> */}
      </>
   );
}
