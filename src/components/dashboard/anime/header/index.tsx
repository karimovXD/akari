import { Container } from "@/components/ui/dashboard-ui/Container";
import styles from "./styles.module.scss";
import Logo from "./logo";
import Search from "./search";
import ThemeSwitcher from "./theme-switcher";
import { cn } from "@/lib/utils";
import HeaderMenu from "./menu";

const Header = () => {
  return (
    <header
      className={cn(
        "border-b h-[4-5rem] lg:h-[5rem] backdrop-blur-md bg-background/60 top-0 boder",
        styles.header
      )}
    >
      <Container className={styles.header__container}>
        <div className={styles.header__left_side}>
          <Logo />
          <HeaderMenu />
        </div>
        <div className={cn("gap-2", styles.header__right_side)}>
          <Search />
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
};

export default Header;
