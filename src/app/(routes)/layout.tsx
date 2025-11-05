import Header from "@/components/dashboard/anime/header";
import { Container } from "@/components/ui/dashboard-ui/Container";

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
      <footer>
        <Container>
          <div>hello there</div>
        </Container>
      </footer>
    </div>
  );
}
