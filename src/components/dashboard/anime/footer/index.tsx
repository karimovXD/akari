import { SITE_NAME } from "@/constants/seo.constans";
import { Container } from "../main/components/Container";
import {
  TypographyMuted,
  TypographyH1,
} from "@/components/ui/dashboard-ui/typography/typography";
import { ViewMoreButton } from "@/components/ui/dashboard-ui/buttons/ViewMoreButton";
import { Button } from "@/components/ui/button";
import { footerData } from "./footer.data";
import Link from "next/link";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <div>
      <Container className={styles.container}>
        <div className={cn(styles.top, "flex-col sm:flex-row")}>
          <TypographyH1>{SITE_NAME}</TypographyH1>
          <div className={cn(styles.links, "flex-col sm:flex-row")}>
            <ViewMoreButton
              url="https://jikan.moe"
              size="lg"
              title="Jikan API"
              variant="ghost"
            />
            <ViewMoreButton
              url="https://myanimelist.net"
              size="lg"
              title="MyAnimeList"
              variant="ghost"
            />
          </div>
        </div>
        <div className={cn(styles.bottom, "flex-col sm:flex-row")}>
          <div className={cn(styles.meta, "items-center sm:items-start")}>
            <TypographyMuted>Powered by Jikan API</TypographyMuted>
            <TypographyMuted>
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </TypographyMuted>
          </div>
          <div className={styles.socials}>
            {footerData.map((item) => (
              <Button
                size={"icon-lg"}
                variant={"ghost"}
                key={item.id}
                asChild
                type="button"
              >
                <Link href={item.url}>{<item.icon />}</Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
