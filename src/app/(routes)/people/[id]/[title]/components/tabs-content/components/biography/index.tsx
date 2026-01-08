import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/dashboard-ui/typography/typography";

interface PropsType {
  name: string;
  about: string;
}

const Biography: React.FC<PropsType> = ({ name, about }) => {
  return (
    <div className="flex flex-col gap-4">
      <TypographyH1>{name}</TypographyH1>
      <div>
        <TypographyH2>Biography</TypographyH2>
        <TypographyP className="mt-0">{about}</TypographyP>
      </div>
    </div>
  );
};

export default Biography;
