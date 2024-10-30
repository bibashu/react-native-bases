import React from "react";
import { Text, Image } from "react-native";
export const Human = ({ firstName, age, isHappy, children }) => {
  return (
    <>
      <Text style={{ fontSize: 20 }}>
        mon nom est {firstName} et mon age est {age}
      </Text>
        {isHappy()}
      {children}
    </>
  );
};
