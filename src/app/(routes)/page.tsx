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
import { Top } from "./shared/components/top/Top";

export default function HomePage() {
  return (
    <section className="text-start">
      <Top />
      <Button>awds</Button>
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
      <TypographyH1>Taxing Laughter: The Joke Tax Chronicles</TypographyH1>
      <TypographyH2>The King's Plan</TypographyH2>
      <TypographyH3>TypographyH3</TypographyH3>
      <TypographyH4>TypographyH4</TypographyH4>
      <TypographyInlineCode>TypographyInlineCode</TypographyInlineCode>
      <TypographyLarge>TypographyLarge</TypographyLarge>
      <TypographyLead>TypographyLead</TypographyLead>
      <TypographyMuted>TypographyMuted</TypographyMuted>
      <TypographyP>TypographyP</TypographyP>
      <TypographySmall>TypographySmall</TypographySmall>
      <Button variant={"ghost"}>hello</Button>
      <Button>hello</Button>
      <h1 className="text-3xl font-bold">Welcome to Akari</h1>
      <p className="text-gray-500 mt-2">
        Explore anime, characters, and stories inspired by Japanese animation.
      </p>
    </section>
  );
}
