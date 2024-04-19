import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <div className="layout">
      <header className="bg-success bg-gradient">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-dark bg-gradient py-3">
        <Container>Footer</Container>
      </footer>
    </div>
  );
};

export default Layout;
