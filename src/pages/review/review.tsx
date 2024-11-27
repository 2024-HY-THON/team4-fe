import React, { useState } from "react";
import styled from "styled-components";

export const ReviewPage = () => {
  const [dayDefinition, setDayDefinition] = useState("");
  const [emotionInfo, setEmotionInfo] = useState<string>(""); // textarea 상태 관리
  const [satisfaction, setSatisfaction] = useState<"만족" | "불만족" | null>(
    null
  ); // 만족 상태 관리

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmotionInfo(e.target.value); // 입력값 업데이트
  };

  const handleSatisfactionClick = (type: "만족" | "불만족") => {
    setSatisfaction(type); // 클릭된 버튼의 상태로 업데이트
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
              active={satisfaction === "만족"}
              onClick={() => handleSatisfactionClick("만족")}
            >
              만족
            </SatisfactionButton>
            <SatisfactionButton
              active={satisfaction === "불만족"}
              onClick={() => handleSatisfactionClick("불만족")}
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
  font-size: 18px;
  margin-bottom: 10px;
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
`;

const SatisfactionButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${(props) =>
    props.active
      ? props.children === "만족"
        ? "#4caf50"
        : "#f44336"
      : "#ddd"};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
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
