export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="testing nested layouts">
      {children}
      This is a test for a nested layout
    </section>
  );
}