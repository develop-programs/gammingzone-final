import React from "react";
import Navigation from "@/components/Navigations/Navigation";
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header>
        <Header />
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
