import type { ReactNode } from "react";
import SkeletonContent from "@/components/ui/dashboard-ui/skeleton/card-skeleton";
import { TypographyLarge } from "@/components/ui/dashboard-ui/typography/typography";
import { Button } from "@/components/ui/button";

interface QueryStateProps<T> {
  isLoading: boolean;
  isError?: boolean;
  data?: T;
  loader?: ReactNode;
  errorMessage?: ReactNode;
  children: ReactNode;
  skeletonNumber?: number;
  onRetry?: () => void;
  isRetrying?: boolean;
}

export function QueryState<T>({
  isLoading,
  isError,
  data,
  skeletonNumber = 12,
  loader = <SkeletonContent number={skeletonNumber} />,
  errorMessage = (
    <TypographyLarge className="text-destructive">
      Error while loading
    </TypographyLarge>
  ),
  onRetry,
  isRetrying,
  children,
}: QueryStateProps<T>) {
  if (isLoading) return <>{loader}</>;

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-2">
        {errorMessage}

        {onRetry && (
          <Button onClick={onRetry} disabled={isRetrying} variant="outline">
            {isRetrying ? "Retrying..." : "Try again"}
          </Button>
        )}
      </div>
    );
  }

  if (!data) return null;

  return <>{children}</>;
}
