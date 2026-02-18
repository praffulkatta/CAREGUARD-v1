export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const formatPercent = (value: number) =>
  `${Math.round(value * 100)}%`;

export const shortDate = (date: Date) =>
  date.toLocaleDateString();
