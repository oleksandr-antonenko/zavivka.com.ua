import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function WomenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
