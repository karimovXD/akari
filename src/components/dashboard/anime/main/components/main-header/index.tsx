import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";
import { CopyLink } from "./CopyLink";
import { BackButton } from "@/components/ui/dashboard-ui/buttons/BackButton";

const MainHeader = () => {
  return (
    <div className={cn(styles.content)}>
      <BackButton />
      <div className={cn(styles.content__right_side)}>
        <CopyLink />
      </div>
    </div>
  );
};

export default MainHeader;
