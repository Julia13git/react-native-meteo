import { View } from "react-native";
import { s } from "./MeteoAdvanced.style";
import { Txt } from "../Txt/Txt";

export function MeteoAdvanced({ dusk, dawn, wind }) {
  return (
    <View style={s.container}>
      <View style={s.label_box}>
        <Txt style={s.title}>{dawn}</Txt>
        <Txt style={s.label}>Aube</Txt>
      </View>
      <View style={s.label_box}>
        <Txt style={s.title}>{dusk}</Txt>
        <Txt style={s.label}>Crépuscule</Txt>
      </View>
      <View style={s.label_box}>
        <Txt style={s.title}>{wind}</Txt>
        <Txt style={s.label}>Vent</Txt>
      </View>
    </View>
  );
}
