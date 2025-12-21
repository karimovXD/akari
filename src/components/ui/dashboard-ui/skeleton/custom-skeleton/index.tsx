import { cn } from "@/lib/utils";

interface PropsType {
  number: number;
  className?: string;
  children: React.ReactNode;
}

const CustomSkeleton: React.FC<PropsType> = ({
  number = 12,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6",
        className
      )}
    >
      {Array.from(Array(number)).map((_, i) => children)}
    </div>
  );
};

export default CustomSkeleton;
