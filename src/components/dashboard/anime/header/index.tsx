import { Container } from "@/components/dashboard/anime/main/components/Container";
import styles from "./styles.module.scss";
import Logo from "./logo";
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
        </div>
        <div className={cn(styles.header__right_side)}>
          <HeaderMenu />
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
};

export default Header;
