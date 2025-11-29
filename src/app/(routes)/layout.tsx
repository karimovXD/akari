import Footer from "@/components/dashboard/anime/footer";
import Header from "@/components/dashboard/anime/header";
import { Container } from "@/components/dashboard/anime/main/components/Container";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <Container className="h-full">{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
