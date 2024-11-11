import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { NavigationProp } from "@react-navigation/native";

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.wrapperImage}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bifour_-removebg-preview_nmmxx9.png",
          }}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Products")}
        style={{
          backgroundColor: "#E94141",
          width: "80%",
          paddingHorizontal: 20,
          borderRadius: 99,
          alignItems: "center",
          paddingVertical: 18,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  description: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  wrapperImage: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
    paddingTop: 85,
    paddingBottom: 33,
    backgroundColor: "#E941411A",
    borderRadius: 60,
  },
  image: {
    width: 260,
    height: 240,
    marginBottom: 20,
  },
});
