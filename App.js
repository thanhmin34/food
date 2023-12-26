import { useFonts } from "expo-font";
import { StyleSheet, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
export default function App() {
  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={[styles.container, styles.textStyle]}
      onLayout={onLayoutRootView}
    ></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    flexDirection: "column",
    height: "100%",
  },
  textStyle: {
    fontFamily: "regular",
    fontSize: 20,
  },
});
