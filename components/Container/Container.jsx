import backgroundImg from "../../assets/background.png";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./Container.style";
import { ImageBackground } from "react-native";

export function Container({ children }) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
