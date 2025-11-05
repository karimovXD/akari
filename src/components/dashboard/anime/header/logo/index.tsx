import { SITE_NAME } from "@/constants/seo.constans";
import { TypographyH4 } from "@/components/ui/dashboard-ui/typography/typography";
import Link from "next/link";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { Button } from "@/components/ui/button";

const Logo = () => {
  return (
    <Link href={DASHBOARD_PAGES.HOME}>
      <Button variant={"ghost"}>
        <TypographyH4>{SITE_NAME}</TypographyH4>
      </Button>
    </Link>
  );
};

export default Logo;
