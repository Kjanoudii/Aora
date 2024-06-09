import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
 const { top } = useSafeAreaInsets();
 return (
   <View style={{ paddingTop: top }}>
     <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
       <Link className="font-bold flex-1 items-center justify-center" href="/">
         ACME
       </Link>
       <View className="flex flex-row gap-4 sm:gap-6">
         <Link
           className="text-md font-medium hover:underline web:underline-offset-4"
           href="/"
         >
           About
         </Link>
         <Link
           className="text-md font-medium hover:underline web:underline-offset-4"
           href="/"
         >
           Product
         </Link>
         <Link
           className="text-md bg-slate-200 py-2 px-3 font-medium hover:underline web:underline-offset-4"
           href="/pricing"
         >
           Pricing
         </Link>
       </View>
     </View>
   </View>
 );
}

export default Header

const styles = StyleSheet.create({})