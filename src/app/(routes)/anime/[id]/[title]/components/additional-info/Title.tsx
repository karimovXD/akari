import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/ui/dashboard-ui/typography/typography";
import type { LucideIcon } from "lucide-react";

interface PropsType {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  ifIcon: boolean;
}

export const Title: React.FC<PropsType> = ({
  title,
  children,
  icon: Icon,
  ifIcon,
}) => (
  <div className="flex flex-col gap-2">
    <TypographyH3
      className={`${ifIcon && "flex items-center justify-start gap-1"}`}
    >
      {ifIcon && Icon && <Icon size={22} />}
      {title}
    </TypographyH3>
    <div className="flex items-center justify-start gap-1">{children}</div>
  </div>
);
