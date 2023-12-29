import { imageUrls } from "./imageUrls";

export const NUMBER_SHOW_CATEGORY = 7;

export const OTHER_CATEGORY = {
  image: imageUrls.iconOther,
  link: "",
  name: "Other",
};

export const VIEW_UI_NUMBERS = {
  banner: 1,
  category: 2,
  productsSlider: 3,
  NearbyRestaurantsSlider: 4,
  productsFullWidth: 5,
};

export const VIEw_NUMBERS_DATA_HOME = [
  {
    number: 1,
    data: {},
  },
  {
    number: 2,
    data: {},
  },
  {
    number: 3,
    data: {
      title: "Discount guaranteed!",
      isShowActiveSlider: true,
      config: {
        horizontal: true,
        showsHorizontalScrollIndicator: false,
      },
      products: [],
    },
  },
  {
    number: 4,
    data: {},
  },
  {
    number: 5,
    data: {
      title: "Recommended For You",
      isShowActiveSlider: false,
      config: {},
      products: [],
    },
  },
];
