import { View, ViewStyle, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  bg?: string;
  w?: number;
  h?: number;
  dir?: ViewStyle["flexDirection"];
  alignItems?: ViewStyle["alignItems"];
  justifyContent?: ViewStyle["justifyContent"];
  radius?: ViewStyle["borderRadius"];
};

export function ThemedView({
  style,
  bg,
  h,
  w,
  dir,
  alignItems,
  justifyContent,
  radius,
  ...otherProps
}: ThemedViewProps) {
  const viewStyles: ViewStyle = {
    backgroundColor: bg,
    height: h,
    width: w,
    flexDirection: dir,
    alignItems,
    justifyContent,
    borderRadius: radius,
  };

  return <View style={[viewStyles, style]} {...otherProps} />;
}
