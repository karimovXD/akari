import type { ReactNode } from "react";
import SkeletonContent from "@/components/ui/dashboard-ui/skeleton/card-skeleton";

interface QueryStateProps<T> {
  isLoading: boolean;
  isError?: boolean;
  data?: T;
  loader?: ReactNode;
  errorMessage?: ReactNode;
  children: ReactNode;
  skeletonNumber?: number;
}

export function QueryState<T>({
  isLoading,
  isError,
  data,
  skeletonNumber = 12,
  loader = <SkeletonContent number={skeletonNumber} />,
  errorMessage = <p className="text-red-500">Error while loading</p>,
  children,
}: QueryStateProps<T>) {
  if (isLoading) return <>{loader}</>;
  if (isError) return <>{errorMessage}</>;
  if (!data) return null;

  return <>{children}</>;
}
