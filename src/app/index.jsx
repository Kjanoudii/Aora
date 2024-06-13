
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
// import {images} from "../constants";

import { StatusBar } from "expo-status-bar";
// import logo from "./logo.png";
import { Redirect, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import {createUser} from "../../lib/appwrite"
import { useGlobalContext } from "@/context/GlobalProvider";
// import { useGlobalContext } from "../context/GlobalProvider";
const { images } = require("../constants");
// const { useGlobalContext } = require("../context/GlobalProvider");

export default function Page() {
  useEffect(() => {}, []);

const {isLoading, isLoggedIn, user, setUser} = useGlobalContext()
  
  console.log(images.logo);
  //  const { loading, isLogged } = useGlobalContext();

   if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <View className="bg-primary ">
      <SafeAreaView className="bg-primary h-full ">
        <ScrollView
          className={"h-full bg-primary"}
          contentContainerStyle={{ height: "100%" }}
        >
          <View className="w-full items-center pt-4 min-h-[85vh] px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode={"contain"}
            />
            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode={"contain"}
            />
            <View className=" relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with {""}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[130px] h-[15px] absolute -bottom-2 -right-10 "
                resizeMode="contain"
              />
            </View>
            <Text className="text-gray-100 text-sm font-pregular font-semibold mt-7 text-center">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Aora
            </Text>
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/home ")}
              containerStyles="w-full mt-7"
              
            />
          </View>
        </ScrollView>
      </SafeAreaView>
        <StatusBar backgroundColor="#161622" style="light" />
    </View>
  );
}

function Content() {
  return <SafeAreaView className="bg-primary h-full"></SafeAreaView>;
}

// function Footer() {
//   const { bottom } = useSafeAreaInsets();
//   return (
//     <View
//       className="flex shrink-0 bg-gray-100 native:hidden"
//       style={{ paddingBottom: bottom }}
//     >
//       <View className="py-6 flex-1 items-start px-4 md:px-6 ">
//         <Text className={"text-center text-gray-700"}>
//           © {new Date().getFullYear()} Me
//         </Text>
//       </View>
//     </View>
//   );
// }
