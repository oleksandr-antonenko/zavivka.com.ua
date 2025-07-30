import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { menNav } from "@/components/header/main-header";

export default function MenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header navlinks={menNav} />
      {children}
      <Footer />
    </>
  );
}
