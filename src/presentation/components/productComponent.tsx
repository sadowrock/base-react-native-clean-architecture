import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import { Product, CategoryColors } from '../../domain/entities/product';

interface ProductComponentProps {
  product: Product;
}

const ProductComponent = ({ product }: ProductComponentProps) => {
  const getCategoryColor = (category: string): string => {
    return CategoryColors[category] || 'black';
  };

  return (
    <View style={style.container}>
    <View
      style={[
        style.statusCicle,
        { backgroundColor: getCategoryColor(product.category) },
      ]}
    />
    <Image source={{ uri: product.image }} style={style.image} />
    <View style={style.info}>
      <Text style={style.text}>ID: {product.id}</Text>
      <Text style={style.text}>Title: {product.title}</Text>
      <Text style={style.text}>Price: ${product.price}</Text>
      <Text style={style.text}>Category: {product.category}</Text>
    </View>
  </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  statusCicle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex:1,
  },
  text: {
    fontSize: 14,
  },
});

export default ProductComponent;
