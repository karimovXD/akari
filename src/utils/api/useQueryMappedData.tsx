import { useMemo } from "react";

export function useQueryMappedData<T>(
  data: T[] | undefined,
  mapFn: (item: T, index: number) => React.ReactNode
) {
  return useMemo(() => {
    if (!data) return [];
    return data.map(mapFn);
  }, [data, mapFn]);
}
