// import { useParams } from "react-router-dom";
import { AlarmFormat } from "./alarmFormat";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "@apis/axiosInstance";
export const AlarmEditPage = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  // 상태 관리
  const [alarmData, setAlarmData] = useState({
    hour: "",
    minute: "",
    activity: "",
    rest: "",
  });
  // 데이터 저장 함수
  const handleSave = async () => {
    try {
      const response = await axiosInstance.put("/api/alarm", alarmData); // 서버 엔드포인트에 맞게 수정
      console.log("서버 응답:", response.data);
      navigate("/main"); // 저장 후 이동할 경로
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
    }
  };
  // 취소 버튼
  const handleCancel = () => {
    navigate("/main"); // 취소 시 이동할 경로
  };
  return (
    <Container>
      <Header>
        <CancelButton onClick={handleCancel}>취소</CancelButton>
        <Title>숨</Title>
        <SaveButton onClick={handleSave}>저장</SaveButton>
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
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700 !important;
`;

const Title = styled.div`
  text-align: center;
  flex: 1;
  font-size: 25px;
  font-weight: bold;
`;

const SaveButton = styled.button`
  color: green;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  color: red;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
