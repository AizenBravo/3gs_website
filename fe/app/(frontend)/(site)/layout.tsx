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
        This is a test for a nested layout
      </main>
    </>
  );
}