import React, { Fragment, useId } from "react";
import { SafeAreaView, FlatList } from "react-native";
import styles from "styles/home.styles";
import { Banners, Category, Header } from "components/componentsPages/home";
import ProductsList from "components/componentsPages/productList";
import NearbyRestaurantsSlider from "components/componentsPages/home/nearbyRestaurantsSlider";
import { VIEW_UI_NUMBERS, VIEw_NUMBERS_DATA_HOME } from "constants/home";

const Home = () => {
  const _id = useId();

  const viewUILayoutData = {
    [VIEW_UI_NUMBERS.banner]: Banners,
    [VIEW_UI_NUMBERS.category]: Category,
    [VIEW_UI_NUMBERS.productsSlider]: ProductsList,
    [VIEW_UI_NUMBERS.NearbyRestaurantsSlider]: NearbyRestaurantsSlider,
    [VIEW_UI_NUMBERS.productsFullWidth]: ProductsList,
  };

  const renderData = () => {
    // TODO
    return VIEw_NUMBERS_DATA_HOME;
  };

  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <FlatList
        data={renderData()}
        renderItem={({ item }) => {
          const { number, data } = item || {};
          const ViewUILayout = viewUILayoutData[number];
          if (!ViewUILayout) return <Fragment />;
          return <ViewUILayout data={data} />;
        }}
        keyExtractor={(i, index) => `${index}-${_id}`}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
