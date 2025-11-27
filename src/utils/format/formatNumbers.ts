export const formatNumber = (num?: number): string =>
  num !== undefined ? num.toLocaleString("ru-RU") : "-";