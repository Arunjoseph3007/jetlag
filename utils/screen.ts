import { Dimensions } from "react-native";

const screenDimensions = Dimensions.get("screen");

export const height = screenDimensions.height;
export const width = screenDimensions.width;

export const vh = (percent: number) => (percent * height) / 100;
export const vw = (percent: number) => (percent * width) / 100;
