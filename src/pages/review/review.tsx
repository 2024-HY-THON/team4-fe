import React, { useState } from "react";
import styled from "styled-components";

export const ReviewPage = () => {
  const [dayDefinition, setDayDefinition] = useState("");
  const [emotionInfo, setEmotionInfo] = useState<string>(""); // textarea 상태 관리
  const [selected, setSelected] = useState("");

  const handleClick = (customType: string) => {
    setSelected(customType);
  }; // 만족 상태 관리

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmotionInfo(e.target.value); // 입력값 업데이트
  };

  return (
    <Container>
      <Section>
        <Title>하루의 정의</Title>
        <InputContainer>
          <Input
            placeholder="당신의 하루에 이름을 지어주세요 ex. 기쁨, 설렘, 여유"
            value={dayDefinition}
            onChange={(e) => setDayDefinition(e.target.value)}
          />
          <ButtonGroup>
            <SatisfactionButton
              customType="satisfied"
              onClick={() => handleClick("satisfied")}
              style={
                selected === "satisfied"
                  ? { backgroundColor: "#7ED957", color: "white" }
                  : {}
              }
            >
              만족
            </SatisfactionButton>
            <SatisfactionButton
              customType="unsatisfied"
              onClick={() => handleClick("unsatisfied")}
              style={
                selected === "unsatisfied"
                  ? { backgroundColor: "#F68B2C", color: "white" }
                  : {}
              }
            >
              불만족
            </SatisfactionButton>
          </ButtonGroup>
        </InputContainer>
      </Section>
      <Section>
        <Title>오늘의 감정</Title>
        <EmotionContainer>
          <Date>11월 17일 (일)</Date>
          <TextArea
            placeholder="info"
            value={emotionInfo} // 상태를 value에 바인딩
            onChange={handleTextareaChange} // 상태 업데이트 핸들러
          />
        </EmotionContainer>
        <AddButton>추가하기</AddButton>
      </Section>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  height: 100vh;
`;

const Section = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px; /* 글씨 크기 증가 */

  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center; /* 버튼 중앙 배치 */
`;

const SatisfactionButton = styled.button<{ customType: string }>`
  width: 160px; /* 버튼 너비 확대 */
  height: 50px; /* 버튼 높이 설정 */
  border: 2px solid;
  border-color: ${(props) =>
    props.customType === "satisfied" ? "#7ED957" : "#F68B2C"};
  color: ${(props) =>
    props.customType === "satisfied" ? "#7ED957" : "#F68B2C"};
  background-color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.customType === "satisfied" ? "#7ED957" : "#F68B2C"};
    color: white;
  }
  &:first-child {
    border-radius: 20px 0 0 20px; /* 왼쪽 버튼 */
  }

  &:last-child {
    border-radius: 0 20px 20px 0; /* 오른쪽 버튼 */
  }
`;

const EmotionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const Date = styled.div`
  font-size: 14px;
  color: #555;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 220px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
