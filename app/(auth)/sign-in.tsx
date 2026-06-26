import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signin = () => {
  return (
    <View>
      <Text>Signin Page</Text>
      <Link
        href="/(auth)/sign-up"
        className="bg-primary mt-4 p-4 text-white rounded"
      >
        Go to Sign up
      </Link>
    </View>
  );
};

export default Signin;
