import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Dimensions } from "react-native";

const products = [
  {
    id: "1",
    name: "Pinarello",
    price: "1800",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bifour_-removebg-preview_nmmxx9.png",
  },
  {
    id: "2",
    name: "Pina Mountain",
    price: "1700",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bione-removebg-preview_xonulx.png",
  },
  {
    id: "3",
    name: "BMC",
    price: "2000",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bithree_removebg-preview_bcgl54.png",
  },
  {
    id: "4",
    name: "Specialized",
    price: "1900",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bitwo-removebg-preview_potfnn.png",
  },
  {
    id: "5",
    name: "Cannondale",
    price: "2100",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bione-removebg-preview_xonulx.png",
  },
  {
    id: "6",
    name: "Scott",
    price: "2200",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bifour_-removebg-preview_nmmxx9.png",
  },
  {
    id: "7",
    name: "Giant",
    price: "2300",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bione-removebg-preview_xonulx.png",
  },
  {
    id: "8",
    name: "Trek",
    price: "2400",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bithree_removebg-preview_bcgl54.png",
  },
  {
    id: "9",
    name: "Fuji",
    price: "2500",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bitwo-removebg-preview_potfnn.png",
  },
  {
    id: "10",
    name: "Cervelo",
    price: "2600",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bione-removebg-preview_xonulx.png",
  },
  {
    id: "11",
    name: "Salsa",
    price: "2700",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bifour_-removebg-preview_nmmxx9.png",
  },
  {
    id: "12",
    name: "Marin",
    price: "2800",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bione-removebg-preview_xonulx.png",
  },
  {
    id: "13",
    name: "Yeti",
    price: "2900",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bithree_removebg-preview_bcgl54.png",
  },
  {
    id: "14",
    name: "Kona",
    price: "3000",
    image:
      "https://res.cloudinary.com/dnta8sd9z/image/upload/v1731316506/React_Native_TH/bitwo-removebg-preview_potfnn.png",
  },
];

const menu = [
  { name: "All", isSelect: true },
  {
    name: "Roadbike",
    isSelect: false,
  },
  {
    name: "Mountain",
    isSelect: false,
  },
];

import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}

const screenWidth = Dimensions.get("window").width;

export default function ProductsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world’s Best Bike</Text>
      <View style={styles.wrapperMenu}>
        {menu.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text
              style={{
                ...styles.itemText,

                color: item.isSelect ? "#E94141" : "#ccc",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          height: 20,
        }}
      ></View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetail", { product: item })
            }
          >
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#E94141",
    marginTop: 47,
  },
  wrapperMenu: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 44,
  },
  menuItem: {
    width: "26%",
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    borderColor: "#E9414187",
    borderWidth: 1,
  },
  itemText: {
    fontSize: 12,
    color: "#ccc",
  },
  productCard: {
    width: screenWidth / 2 - 20,
    flex: 1,
    alignItems: "center",
    margin: 5,
    padding: 10,
    backgroundColor: "#f5e1af",
    borderRadius: 8,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
