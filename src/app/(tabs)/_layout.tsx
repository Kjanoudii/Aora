import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }): any => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} 
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
      />
      <Text className={` text-xs ${focused ? "font-psemibold" : "font-pregular"}`} style={{color:color}}>
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle:{
            backgroundColor:"#161622",
            borderTopWidth:1, 
            borderTopColor:"#232533",
            height:84
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }): any => {
              return (
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name="Home"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="bookMarks"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }): any => {
              return (
                <TabIcon
                  icon={icons.bookmark}
                  color={color}
                  name="Bookmark"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Create"
          options={{
            title: "create",
            headerShown: false,
            tabBarIcon: ({ color, focused }): any => {
              return (
                <TabIcon
                  icon={icons.plus}
                  color={color}
                  name="create"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }): any => {
              return (
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name="profile"
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
