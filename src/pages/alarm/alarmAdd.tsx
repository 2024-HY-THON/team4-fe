import React from "react";
import styled from "styled-components";

export const AlarmAddPage = () => {
  return (
    <Container>
      <Header>
        <CancelButton>취소</CancelButton>
        <Title>숨</Title>
        <SaveButton>저장</SaveButton>
      </Header>
      <Body>
        <Content>
          <TimerTitle>숨 쉴 시간</TimerTitle>
          <TimeInputContainer>
            <TimeInput type="number" placeholder="00" />
            <TimeSpan>시</TimeSpan>
            <TimeInput type="number" placeholder="00" />
            <TimeSpan>분</TimeSpan>
          </TimeInputContainer>
        </Content>
        <Field>
          <Label>활동 내용</Label>
          <TextInput type="text" placeholder="하늘보기" />
        </Field>
        <Field>
          <Label>휴식 시간(분)</Label>
          <TextInput type="number" placeholder="5" />
        </Field>
      </Body>
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

const Body = styled.div`
  align-items: center;
  justify-content: center;

  flex: 0.8;
  display: flex;
  flex-direction: column;
  width: 85%;
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

const Content = styled.div`
  width: 100%;
  max-width: 400px;
  background: #f0f9ff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const TimerTitle = styled.div`
  font-size: 27px;
  margin: 0px 0px 20px 10px; // 상 우 하 좌
`;
const Label = styled.div`
  font-size: 18px;
`;

const TimeInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TimeSpan = styled.span`
  font-size: 23px;
`;
const TimeInput = styled.input`
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 23px;
  border: none;
  border-bottom: 1px solid;
  background-color: #f0f9ff;
`;

const Field = styled.div`
  display: flex;
  margin: 15px 0;
  width: 100%;
  gap: 10px;
  border-bottom: 1px solid #e1e4e5;
`;

const TextInput = styled.input`
  width: 60%;

  font-size: 16px;

  border: none;
`;
