import React from "react";

import { View, Dimensions, Text } from "react-native";
import styles from "./banners.styles";
import { imageUrls } from "constants/imageUrls";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "constants/theme";
import { AUTO_PLAY_BANNER } from "constants/variables";
import useTranslate from "hooks/useTranslate";

const Banners = () => {
  const { localizeMessage } = useTranslate();
  const { width, height } = Dimensions.get("window");

  const images = [
    imageUrls.banner1,
    imageUrls.banner2,
    imageUrls.banner3,
    imageUrls.banner4,
    imageUrls.banner5,
  ];

  return (
    <View style={styles.banners}>
      <Text style={styles.title}>{localizeMessage("Special offer")}</Text>
      <View style={styles.slider}>
        <SliderBox
          images={images}
          dotColor={COLORS.white}
          ImageComponentStyle={styles.sliderImage}
          inactiveDotColor={COLORS.white}
          dotStyle={{
            width: 15,
            height: 4,
            borderRadius: 2,
            padding: 0,
            margin: 0,
          }}
          autoplayInterval={AUTO_PLAY_BANNER}
          autoplay={true}
          circleLoop
        />
      </View>
    </View>
  );
};

export default Banners;
