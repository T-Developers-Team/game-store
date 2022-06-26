import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const LayoutView = () => {
  return (
    <div>
      <Header />

      <main className="bg-slate-800 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default LayoutView
