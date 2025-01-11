import { type LatLng } from "react-native-maps";
import { radian } from "./units";

export function distanceBetweenCoords(loc1: LatLng, loc2: LatLng) {
  const earthRadiusInKm = 6371;
  const dLat = radian(loc1.latitude - loc2.latitude);
  const dLon = radian(loc1.longitude - loc2.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(radian(loc1.latitude)) *
      Math.cos(radian(loc2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = earthRadiusInKm * c;
  return d;
}
