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
      <Content>
        <Label>숨 쉴 시간</Label>
        <TimeInputContainer>
          <TimeInput type="number" placeholder="00" />
          <span>시</span>
          <TimeInput type="number" placeholder="00" />
          <span>분</span>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: "Arial, sans-serif";
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
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

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TimeInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeInput = styled.input`
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Field = styled.div`
  margin: 15px 0;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
