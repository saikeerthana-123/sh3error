import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import StoryScreen from "./screens/ReadStoryScreen";
import WriteScreen from "./screens/WriteStoryScreen";

export default class App extends React.Component {
   render() {
    return(
       <AppContainer />
     )
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStoryScreen: { screen: StoryScreen },
  WriteStoryScreen: { screen: WriteScreen }
},
{defaultNavigationOptions:
({navigation})=>({
  tabBarIcon:()=>{
    const routeName = navigation.state.routeName 
  }
})
}
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
