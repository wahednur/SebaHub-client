import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const RootLayout = () => {
  return (
    <main className="overflow-hidden dark:bg-bg-dark bg-white">
      <header>
        <Header />
      </header>
      <div className="fix-height">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default RootLayout;
