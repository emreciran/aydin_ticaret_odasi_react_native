import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import Logo from "../../assets/logo.png";
import Institutional from "../screens/Institutional";
import Announcement from "../screens/Announcement";
import AnnouncementDetails from "../screens/AnnouncementDetails";
import News from "../screens/News";

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#fff",
          headerBackTitle: "Geri",
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 18,
          },
          headerBackground: () => (
            <View style={styles.container}>
              <Image source={Logo} style={styles.logo} />
            </View>
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerBackTitle: "Geri",
            title: "Aydın Ticaret Borsası",
            headerTitle: (props) => (
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={styles.title}>{props.children}</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Institutional"
          component={Institutional}
          options={{
            headerTitle: "Kurumsal",
          }}
        />
        <Stack.Screen
          name="Announcement"
          component={Announcement}
          options={{
            headerTitle: "Duyurular",
          }}
        />
        <Stack.Screen
          name="AnnouncementDetails"
          component={AnnouncementDetails}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerTitle: "Haberler",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 100,
    backgroundColor: "#2F58CD",
  },
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Navigations;
