import Footer from "@/components/dashboard/anime/footer";
import Header from "@/components/dashboard/anime/header";
import { Container } from "@/components/dashboard/anime/main/components/Container";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
