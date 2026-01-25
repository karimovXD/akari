import { TypographyH1 } from "@/components/ui/dashboard-ui/typography/typography";
import { BackButton } from "@/components/ui/dashboard-ui/buttons/BackButton";

export const Soon = () => (
  <div className="flex flex-col gap-24 items-start">
    <BackButton />
    <div className="text-center w-full">
      <TypographyH1>Soon {":)"}</TypographyH1>
    </div>
  </div>
);
