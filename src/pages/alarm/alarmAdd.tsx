import React from "react";
import styled from "styled-components";
import { AlarmFormat } from "./alarmFormat";
import backButtonIcon from "@assets/alarmEdit/backbutton.svg";
import { useNavigate } from "react-router-dom";

export const AlarmAddPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>
          <img src={backButtonIcon} alt="뒤로가기" />
        </BackButton>
        <Title>숨</Title>
      </Header>
      <AlarmFormat
        timerTitle="숨 쉴 시간"
        timerPlaceholder={{ hour: "00", minute: "00" }}
        activityLabel="활동 내용"
        activityPlaceholder="하늘보기"
        restLabel="휴식 시간(분)"
        restPlaceholder="5"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  /* background-color: yellow; */
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: 700 !important;
`;

const Title = styled.div`
  text-align: center;
  flex: 1;
  font-size: 25px;
  font-weight: bold;
`;
const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
