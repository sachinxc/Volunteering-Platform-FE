import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Flex from "../Styles/styledComponent/Flex";

const Layout = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
    </Container>
  );
};

export default Layout;
