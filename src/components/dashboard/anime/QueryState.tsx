import type { ReactNode } from "react";
import { Spinner } from "@/components/ui/spinner";

interface QueryStateProps<T> {
  isLoading: boolean;
  isError?: boolean;
  data?: T;
  loader?: ReactNode;
  errorMessage?: ReactNode;
  children: ReactNode;
}

export function QueryState<T>({
  isLoading,
  isError,
  data,
  loader = <Spinner />,
  errorMessage = <p className="text-red-500">Ошибка при загрузке</p>,
  children,
}: QueryStateProps<T>) {
  if (isLoading) return <>{loader}</>;
  if (isError) return <>{errorMessage}</>;
  if (!data) return null;

  return <>{children}</>;
}
