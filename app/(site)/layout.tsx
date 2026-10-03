import Header from "@/components/_blocks/header/header";
import Footer from "@/components/_blocks/footer/footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      id="top"
      className="grid min-h-dvh grid-cols-[minmax(0,1fr)] grid-rows-[1fr_auto]"
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
