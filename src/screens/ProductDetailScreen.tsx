import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { RouteProp } from "@react-navigation/native";
import Fontisto from "@expo/vector-icons/Fontisto";

type ProductDetailScreenRouteProp = RouteProp<
  {
    params: {
      product: {
        image: string;
        name: string;
        price: number;
        description: string;
      };
    };
  },
  "params"
>;

export default function ProductDetailScreen({
  route,
}: {
  route: ProductDetailScreenRouteProp;
}) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>

      <Text style={styles.name}>{product.name}</Text>
      <View style={styles.wrapperPrice}>
        <Text
          style={{
            color: "#ccc",
            padding: 5,
            borderRadius: 5,
            marginBottom: 10,
            fontSize: 20,
          }}
        >
          15% OFF I 350$
        </Text>
        <Text style={styles.price}>{product.price} USD</Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
          marginLeft: 15,
        }}
      >
        Description
      </Text>
      <Text style={styles.description}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>
      <View style={styles.functionButton}>
        <Fontisto name="heart-alt" size={24} color="black" />
        <TouchableOpacity style={styles.buttonAddToCart}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    paddingTop: 36,
  },
  wrapperImage: {
    paddingTop: 36,
    paddingHorizontal: 30,
    paddingBottom: 12,
    marginBottom: 20,
    width: "100%",
    textAlign: "center",
    backgroundColor: "#E941411A",
    alignItems: "center",
    borderRadius: 60,
  },
  wrapperPrice: {
    flexDirection: "row",
    gap: 20,
    paddingLeft: 10,
  },
  image: {
    width: 260,
    height: 240,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 15,
  },
  price: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    marginLeft: 15,
    marginBottom: 20,
    opacity: 0.57,
  },
  functionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    marginTop: 20,
  },
  buttonAddToCart: {
    backgroundColor: "#E94141",
    width: "60%",
    paddingHorizontal: 20,
    borderRadius: 99,
    alignItems: "center",
    paddingVertical: 10,
  },
});
