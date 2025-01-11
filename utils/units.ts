export const radian = (deg: number) => deg * (Math.PI / 180);

export const kmsFormat = (distInKm: number) => {
  if (distInKm > 1) {
    return `${distInKm.toFixed(1)} kms`;
  }
  return `${Math.floor(distInKm * 1000)} ms`;
};

export const timeDiff = (a: Date) => {
  let diff = new Date().getTime() - a.getTime();

  diff = Math.floor(diff / 1000);
  const secs = (diff % 60).toString().padStart(2, "0");
  diff = Math.floor(diff / 60);
  const mins = (diff % 60).toString().padStart(2, "0");
  diff = Math.floor(diff / 60);
  const hrs = diff % 60;

  return `${hrs}:${mins}:${secs}`;
};
