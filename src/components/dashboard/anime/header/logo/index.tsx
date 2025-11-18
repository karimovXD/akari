import { SITE_NAME } from "@/constants/seo.constans";
import { TypographyH4 } from "@/components/ui/dashboard-ui/typography/typography";

const Logo = () => (
  <TypographyH4 className="text-primary">{SITE_NAME}</TypographyH4>
);

export default Logo;
