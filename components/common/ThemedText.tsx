import {
  Text,
  type TextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";

export type ThemedTextProps = TextProps & {
  color?: string;
  bg?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | number;
  family?: string;
  align?: "auto" | "left" | "right" | "center" | "justify" | undefined;
};

export function ThemedText({
  style,
  color,
  bg,
  size = "md",
  type = "default",
  align,
  family,
  ...rest
}: ThemedTextProps) {
  const fontSizeMap = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 28,
  } as const;

  // @ts-ignore
  const fontSize = Number.isNaN(size) ? fontSizeMap[size] : size;

  const textStyles: StyleProp<TextStyle> = {
    color,
    fontSize,
    fontFamily: family,
    textAlign: align,
    backgroundColor: bg,
  };

  return <Text style={[textStyles, styles[type], style]} {...rest} />;
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
