import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Image } from "react-native";
import { images } from "../../constants";
import * as Yup from "yup";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
const SignIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };
   const validation = Yup.object().shape({
     email: Yup.string().email("Invalid email").required("Email is required"),
     password: Yup.string().required("Password is required"),
   });
 const submit = (data: any, {resetForm} ) => {
   console.log(data);
 resetForm();
 };

  return (
    <View className="bg-primary h-full">
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full h-full px-4 justify-center my-6">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[115px] h-[35px]"
            />
            <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
              Log in to Aora
            </Text>
            <Formik
              initialValues={initialValues}
              onSubmit={submit}
              validationSchema={validation}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <View className="space-y-2 my-3">
                    <Text className="text-base text-gray-100 font-pmedium">
                      Email:
                    </Text>
                    <View
                      className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2
                      border-black-200 focus:border-secondary flex flex-row items-center"
                    >
                      <TextInput
                        className="flex-1 text-white font-psemibold text-base "
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        keyboardType="email-address"
                      />
                    </View>
                    <ErrorMessage name="email" component={Text} />
                  </View>
                  <View className="space-y-2 my-3">
                    <Text className="text-base text-gray-100 font-pmedium">
                      Password:
                    </Text>
                    <View
                      className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2
                      border-black-200 focus:border-secondary flex flex-row items-center"
                    >
                      <TextInput
                        className="flex-1 text-white font-psemibold text-base"
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry={true}
                      />
                    </View>
                    <ErrorMessage name="password" component={Text} />
                  </View>
                  <CustomButton
                    title="Sign In"
                    handlePress={handleSubmit} // Ensure handleSubmit is used here
                    containerStyles="mt-7"
                  />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SignIn;
