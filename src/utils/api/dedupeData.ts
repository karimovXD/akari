export const dedupeByKey = <T, K extends keyof T>(items: T[], key: K): T[] =>
  Array.from(new Map(items.map(item => [item[key], item])).values())