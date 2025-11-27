import {
  TypographyH1,
  TypographyLead,
} from "@/components/ui/dashboard-ui/typography/typography";
import styles from "../styles.module.scss";

interface PropsType {
  title: string;
  title_english: string;
  title_japanese: string;
}

type OptionalProps = Partial<PropsType>;

export const AnimeTitles: React.FC<OptionalProps> = ({
  title,
  title_english,
  title_japanese,
}) => {
  return (
    <div className={styles.anime__content__article_titles}>
      <TypographyH1>{title}</TypographyH1>
      <TypographyLead>{title_english}</TypographyLead>
      <TypographyLead>{title_japanese}</TypographyLead>
    </div>
  );
};
