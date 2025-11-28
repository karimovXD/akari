import { TypographyH3 } from "@/components/ui/dashboard-ui/typography/typography";
import type { LucideIcon } from "lucide-react";
import styles from "./styles.module.scss";

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
  <div className={styles.title}>
    <TypographyH3 className={`${ifIcon && styles.title__with_icon}`}>
      {ifIcon && Icon && <Icon size={22} />}
      {title}
    </TypographyH3>
    <div className={styles.title__content}>{children}</div>
  </div>
);
