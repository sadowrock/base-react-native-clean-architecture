import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from '../components/productComponent';
import { RootState } from '../redux/store';
import { fetchProducts } from '../redux/slice/productSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { ThemedScreenProps } from '../../core/utils/type';



const ProductScreen = ({theme}: ThemedScreenProps) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { products, loading, error, message } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={[styles.screenContainer, {backgroundColor: theme.backgroundColor}]}>
        <Text style={[styles.loadingText, { backgroundColor: theme.textColor}]}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.screenContainer, {backgroundColor: theme.backgroundColor}]}>
        <Text style={[styles.loadingText, { backgroundColor: theme.textColor}]}>{error}</Text>
      </View>
    );
  }

  return (
     <View style={[styles.screenContainer, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.loadingText, { backgroundColor: theme.textColor}]}>{message}</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductComponent product={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};




const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingText: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  messageText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
});

export default ProductScreen;
