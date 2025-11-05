import { useMemo, useEffect } from "react";
import { debounce } from "lodash";

export const useDebouncedCallback = (callback: (...args: any[]) => void, delay: number) => {
    const debounced = useMemo(() => debounce(callback, delay), [callback, delay]);

    useEffect(() => {
        return () => {
            debounced.cancel();
        };
    }, [debounced]);

    return debounced;
};