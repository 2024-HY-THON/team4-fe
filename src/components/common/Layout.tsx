import { useTabBarStore } from "@store/tabBarStore";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useShallow } from "zustand/shallow";

export const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { setIsTabBarVisible } = useTabBarStore(
    useShallow((state) => ({
      setIsTabBarVisible: state.setIsTabBarVisible,
    }))
  );

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setIsTabBarVisible(false);
    } else {
      setIsTabBarVisible(true);
    }
  }, []);

  return <Container>{children}</Container>;
};

const Container = styled.div`
  min-width: 375px;
  max-width: 400px;
  height: 100vh;
  padding-bottom: 78px;
  margin: 0 auto;
  background-color: white;
  color: #1d1d1d;
`;
