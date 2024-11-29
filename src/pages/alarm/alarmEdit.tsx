// import { useParams } from "react-router-dom";
import { AlarmFormat } from "./alarmFormat";
import styled from "styled-components";
export const AlarmEditPage = () => {
  // const { id } = useParams();

  return (
    <Container>
      <Header>
        <CancelButton>취소</CancelButton>
        <Title>숨</Title>
        <SaveButton>저장</SaveButton>
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
