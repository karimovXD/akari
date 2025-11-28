import React from "react";
import { SITE_NAME } from "@/constants/seo.constans";
import { Container } from "../main/components/Container";
import {
  TypographyMuted,
  TypographyH3,
} from "@/components/ui/dashboard-ui/typography/typography";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <Container className="flex flex-col gap-2">
        <div className="border-b border-t flex items-center justify-between p-2">
          <div className="w-72">
            <TypographyH3>{SITE_NAME}</TypographyH3>
            <TypographyMuted>
              Your ultimate destination for anime and manga discovery, tracking,
              and discussion.
            </TypographyMuted>
            <div>
              <Button variant={"ghost"} size={"icon"}>
                <Github />
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <TypographyH3>Explore</TypographyH3>
          </div>
          <div className="flex-1">
            <TypographyH3>Explore</TypographyH3>
          </div>
        </div>
        <TypographyMuted className="text-center">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </TypographyMuted>
      </Container>
    </div>
  );
};

export default Footer;
