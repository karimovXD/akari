import {
  TypographyH1,
  TypographyH2,
} from "@/components/ui/dashboard-ui/typography/typography";
import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";

interface PropsType {
  children: React.ReactNode;
  title: string;
  withUnderline?: boolean;
}

export const SectionCategory: React.FC<PropsType> = ({
  children,
  title,
  withUnderline = false,
}) => {
  return (
    <div className={cn(styles.section)}>
      <div>
        {withUnderline ? (
          <TypographyH2 className={cn(styles.section__title)}>
            {title}
          </TypographyH2>
        ) : (
          <TypographyH1 className={cn(styles.section__title, "text-primary")}>
            {title}
          </TypographyH1>
        )}
      </div>
      {children}
    </div>
  );
};
