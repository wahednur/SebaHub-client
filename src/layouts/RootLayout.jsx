import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const RootLayout = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default RootLayout;
