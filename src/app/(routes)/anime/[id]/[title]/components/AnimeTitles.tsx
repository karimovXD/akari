import {
  TypographyH1,
  TypographyLead,
} from "@/components/ui/dashboard-ui/typography/typography";
import styles from "../styles.module.scss";

interface PropsType {
  title: string;
  title_english?: string | null;
  title_japanese?: string | null;
}

type OptionalProps = Partial<PropsType>;

export const AnimeTitles: React.FC<OptionalProps> = ({
  title,
  title_english,
  title_japanese,
}) => {
  const englishTitle = title_english && (
    <TypographyLead>{title_english}</TypographyLead>
  );

  const japaneseTitle = title_japanese && (
    <TypographyLead>{title_japanese}</TypographyLead>
  );

  return (
    <div className={styles.anime__content__article_titles}>
      <TypographyH1>{title}</TypographyH1>
      {englishTitle}
      {japaneseTitle}
    </div>
  );
};
