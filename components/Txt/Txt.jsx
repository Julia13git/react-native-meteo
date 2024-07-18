import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

export function Txt({ children, style }) {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || s.text.fontSize;
  console.log(1 / height);
  return (
    <Text style={[s.text, style, { fontSize: fontSize * 0.001 * height }]}>
      {children}
    </Text>
  );
}
