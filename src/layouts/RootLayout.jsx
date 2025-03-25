import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const RootLayout = () => {
  return (
    <main className="overflow-hidden">
      <header>
        <Header />
      </header>
      <div className="min-h-[calc(100vh-415px)]">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default RootLayout;
