import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import Http from "../../libs/http";
import CoinItem from "./CoinItem";

const CoinsScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const handlePress = () => {
    navigation.navigate("CoinDetail");
  };

  useEffect(() => {
    Http.instance
      .get("https://api.coinlore.net/api/tickers/")
      .then((res) => setData(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CoinItem data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  titleText: {
    color: "#fff",
    textAlign: "center",
  },
  btn: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default CoinsScreen;
