import { useMemo, useCallback } from "react";

export function useQueryMappedData<T>(
  data: readonly T[] | undefined,
  mapFn: (item: T, index: number) => React.ReactNode
): React.ReactNode[] {
  const stableMapFn = useCallback(mapFn, []);

  return useMemo(() => {
    return data?.map(stableMapFn) ?? [];
  }, [data, stableMapFn]);
}


