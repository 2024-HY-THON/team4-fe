import { ReactNode } from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  min-width: 360px;
  max-width: 400px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  color: #1d1d1d;
`;
