import React from "react";
import { SITE_NAME } from "@/constants/seo.constans";
import { Container } from "../main/components/Container";
import {
  TypographyMuted,
  TypographyH1,
} from "@/components/ui/dashboard-ui/typography/typography";

const Footer = () => {
  return (
    <div>
      <Container className="flex flex-col gap-4">
        <div className="p-4 border-t border-b">
          <TypographyH1>Footer</TypographyH1>
        </div>
        <TypographyMuted className="text-center">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </TypographyMuted>
      </Container>
    </div>
  );
};

export default Footer;
