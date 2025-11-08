import { TypographyH2 } from "@/components/ui/dashboard-ui/typography/typography";
import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";

interface PropsType {
  children: React.ReactNode;
  title: string;
}

export const SectionCategory: React.FC<PropsType> = ({ children, title }) => {
  return (
    <div className={cn(styles.section)}>
      <TypographyH2 className={cn(styles.section__title)}>{title}</TypographyH2>
      {children}
    </div>
  );
};
