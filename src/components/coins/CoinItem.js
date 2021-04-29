import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CoinItem = ({ data }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{data.name}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 24,
  },
});

export default CoinItem;
