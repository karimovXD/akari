import Footer from "@/components/dashboard/anime/footer";
import Header from "@/components/dashboard/anime/header";
import { Container } from "@/components/dashboard/anime/main/components/Container";
import styles from "./styles.module.scss";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout__content}>
      <Header />
      <main className="flex-1">
        <Container className="h-full">{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
