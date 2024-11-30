import styled from "styled-components";
import { AlarmFormat } from "./alarmFormat";
import backButtonIcon from "@assets/alarmEdit/backbutton.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { axiosInstance } from "@apis/axiosInstance";

export const AlarmAddPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  const [alarmData, setAlarmData] = useState({
    hour: "",
    minute: "",
    activity: "",
    rest: "",
  });
  const handleSubmit = async () => {
    try {
      const requestBody = {
        recipeId: parseInt(alarmData.activity, 10), // activity에 저장된 id 사용
        minutes: parseInt(alarmData.rest, 10),
        startHour: parseInt(alarmData.hour, 10),
        startMinute: parseInt(alarmData.minute, 10),
      };
      console.log(requestBody);
      const response = await axiosInstance.post("/sum/add-rest", alarmData); // 서버 URL에 맞게 수정
      console.log("새 알람 추가시 서버 응답:", response.data);
      navigate("/main");
    } catch (error) {
      console.error("새 알람 추가 시 오류 발생:", error);
    }
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
        restLabel="휴식 시간(분)"
        restPlaceholder="5"
        onInputChange={(key, value) =>
          setAlarmData((prev) => ({ ...prev, [key]: value }))
        }
      />
      {/* 추가하기 버튼 */}
      <AddButton onClick={handleSubmit}>추가하기</AddButton>
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
const AddButton = styled.button`
  width: 90%;
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
