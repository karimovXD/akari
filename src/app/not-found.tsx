import { Container } from "@/components/dashboard/anime/main/components/Container";
import { BackButton } from "@/components/ui/dashboard-ui/buttons/BackButton";
import {
  TypographyH1,
  TypographyLarge,
} from "@/components/ui/dashboard-ui/typography/typography";

const NotFound = () => {
  return (
    <Container className="h-full h-svh flex flex-col items-start">
      <BackButton />
      <div className="w-full flex-1 flex items-center justify-center flex-col gap-2">
        <TypographyH1>404 - Not Found</TypographyH1>
        <TypographyLarge>
          The page you're looking for doesn't exist
        </TypographyLarge>
      </div>
    </Container>
  );
};

export default NotFound;
