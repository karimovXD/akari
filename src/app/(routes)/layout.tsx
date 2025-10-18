import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "@/components/ui/dashboard-ui/typography/typography";
import type React from "react";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TypographyH1>Taxing Laughter: The Joke Tax Chronicles</TypographyH1>
      <TypographyH2>The King's Plan</TypographyH2>
      <TypographyH3>TypographyH3</TypographyH3>
      <TypographyH4>TypographyH4</TypographyH4>
      <div className="p-2">
        <TypographyBlockquote>
          "After all," he said, "everyone enjoys a good joke, so it's only fair{" "}
          <br />
          that they should pay for the privilege."
        </TypographyBlockquote>
      </div>
      <TypographyInlineCode>TypographyInlineCode</TypographyInlineCode>
      <TypographyLarge>TypographyLarge</TypographyLarge>
      <TypographyLead>TypographyLead</TypographyLead>
      <TypographyMuted>TypographyMuted</TypographyMuted>
      <TypographyP>TypographyP</TypographyP>
      <TypographySmall>TypographySmall</TypographySmall>
      <Button variant={"ghost"}>hello</Button>
      {children}
    </div>
  );
}
