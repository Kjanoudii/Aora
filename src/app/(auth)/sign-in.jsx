import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useGlobalContext } from "@/context/GlobalProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Image, Alert } from "react-native";
import { images } from "../../constants";
import * as Yup from "yup";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "../../../lib/appwrite";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser, setIsLogged } = useGlobalContext();

  // const navitage = useNavigation()
  const initialValues = {
    email: "",
    password: "",
  };
  const validation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const submit = async (data, { resetForm }) => {
    const { email, password } = data;

    setIsLogged(true);
    try {
     const result = await signIn(email, password);
      setUser(result);
      console.log(email, password);
      router.replace("/home");
      resetForm();
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };


  // console.log("This is the user: ", user)
  return (
    <View className="bg-primary h-full">
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full min-h-[85vh] px-4 justify-center my-6">
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
                  <View className="space-y-2 my-5">
                    <Text className="text-base text-gray-100 font-pmedium">
                      Email:
                    </Text>
                    <View
                      className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2
                      border-gray-700 focus:border-secondary flex flex-row items-center"
                    >
                      <TextInput
                        className="flex-1 text-white font-psemibold text-base "
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        keyboardType="email-address"
                      />
                    </View>
                    <ErrorMessage
                      name="email"
                      component={Text}
                      className="text-red-800"
                    />
                  </View>
                  <View className="space-y-2 my-3">
                    <Text className="text-base text-gray-100 font-pmedium">
                      Password:
                    </Text>
                    <View
                      className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2
                      border-gray-700 focus:border-secondary flex flex-row items-center"
                    >
                      <TextInput
                        className="flex-1 text-white font-psemibold text-base"
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry={true}
                      />
                    </View>
                    <ErrorMessage
                      name="password"
                      component={Text}
                      className="text-red-800"
                    />
                  </View>
                  <CustomButton
                    title="Sign In"
                    handlePress={handleSubmit} // Ensure handleSubmit is used here
                    containerStyles="mt-7"
                    isLoading={isSubmitting}
                  />
                </View>
              )}
            </Formik>
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have an account?
              </Text>
              <Link
                href="/sign-up"
                className="text-lg font-psemibold text-secondary"
              >
                Signup
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SignIn;
