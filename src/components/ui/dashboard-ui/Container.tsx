//import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface PropsType {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<PropsType> = ({ children, className }) => {
  return (
    <div className={cn("w-full 2xl:w-[96rem] m-auto p-2 lg:p-4", className)}>
      {children}
    </div>
  );
};
