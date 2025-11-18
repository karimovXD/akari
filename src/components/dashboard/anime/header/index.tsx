import { Container } from "@/components/dashboard/anime/main/components/Container";
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
        "border-b lg:h-[5rem] backdrop-blur-md bg-background/60",
        styles.header
      )}
    >
      <Container className={cn(`${styles.header__container}`)}>
        <div className={cn(styles.header__left_side)}>
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
