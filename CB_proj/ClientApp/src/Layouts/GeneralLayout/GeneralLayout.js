import React from "react";
import { Wrapper, Nav, Left, Right, Footer } from "./styles";
export const GeneralLayout = ({ nav, left, right, footer }) => {
  return (
    <>
      <Wrapper>
        <Nav>{nav}</Nav>
        <Left>{left}</Left>
        <Right>{right}</Right>
        <Footer>{footer}</Footer>
      </Wrapper>
    </>
  );
};
