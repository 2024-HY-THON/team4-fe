import styled from "styled-components";
import logo from "@assets/common/logo.svg";
import windIcon from "@assets/common/wind-icon.svg";

export const Splash = () => {
  return (
    <Container>
      <LogoImage>
        <img src={logo} alt="logo" />
      </LogoImage>
      <h1>일상 속 짧은 해방의 순간</h1>

      <WindIcon>
        <img src={windIcon} alt="wind-icon" />
      </WindIcon>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 321px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #049dbf;
  }
`;

const LogoImage = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 118px;
    height: 96px;
  }
`;

const WindIcon = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 26px;
    height: 26px;
  }
`;
