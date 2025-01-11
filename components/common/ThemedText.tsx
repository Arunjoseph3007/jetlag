import { Colors } from "@/constants/Colors";
import { Text, StyleSheet, type TextProps, type TextStyle } from "react-native";

export type ThemedTextProps = TextProps & {
  color?: string;
  bg?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | number;
  family?: string;
  align?: TextStyle["textAlign"];
  weight?: TextStyle["fontWeight"];
};

export function ThemedText({
  style,
  color = Colors.white,
  bg,
  size = "md",
  type = "default",
  align,
  family,
  weight,
  ...rest
}: ThemedTextProps) {
  const fontSizeMap = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 18,
    xl: 22,
    "2xl": 26,
    "3xl": 30,
  } as const;

  // @ts-ignore
  const fontSize = typeof size == "string" ? fontSizeMap[size] : size;

  const textStyles: TextStyle = {
    color,
    fontSize,
    lineHeight: fontSize && fontSize + 5,
    fontFamily: family,
    textAlign: align,
    backgroundColor: bg,
    fontWeight: weight,
  };

  return <Text style={[styles[type], textStyles, style]} {...rest} />;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
