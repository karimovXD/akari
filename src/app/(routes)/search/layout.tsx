import { BackButton } from "@/components/ui/dashboard-ui/buttons/BackButton";
import { SearchInput } from "@/components/ui/dashboard-ui/input/search/components/Input";
import styles from "./styles.module.scss";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col gap-10">
      <div className={styles.layout__content}>
        <BackButton />
        <div className={styles.layout__content__input}>
          <SearchInput />
        </div>
      </div>
      {children}
    </div>
  );
}
