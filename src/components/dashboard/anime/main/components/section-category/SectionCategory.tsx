import {
  TypographyH1,
  TypographyMuted,
} from "@/components/ui/dashboard-ui/typography/typography";
import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PropsType {
  children: React.ReactNode;
  title: string;
  viewMoreLink?: string;
}

export const SectionCategory: React.FC<PropsType> = ({
  children,
  title,
  viewMoreLink = "",
}) => {
  return (
    <div className={cn(styles.section)}>
      <div className="flex justify-between items-center">
        <TypographyH1 className={cn(styles.section__title, "text-primary")}>
          {title}
        </TypographyH1>
        {viewMoreLink && (
          <Link
            href={viewMoreLink}
            className="flex items-center gap-1 font-bold"
          >
            <Button variant={"ghost"}>
              <TypographyMuted className={cn(styles.section__title)}>
                view more
              </TypographyMuted>
            </Button>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};
