import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  bg?: string;
};

export function ThemedView({ style, bg, ...otherProps }: ThemedViewProps) {
  const backgroundColor = bg;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
