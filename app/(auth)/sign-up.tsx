import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signup = () => {
  return (
    <View>
      <Text>Signup Page</Text>
      <Link
        href="/(auth)/sign-in"
        className="bg-primary mt-4 p-4 text-white rounded"
      >
        Go to Sign in
      </Link>
    </View>
  );
};

export default Signup;
