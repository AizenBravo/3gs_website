import FooterV1 from "@core/components/navigation/footer-v1";
import { Navbar } from "@core/components/navigation/navbar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <FooterV1 />
    </>
  );
}