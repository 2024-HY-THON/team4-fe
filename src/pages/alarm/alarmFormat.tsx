import styled from "styled-components";

export const AlarmFormat = ({
  timerTitle = "숨 쉴 시간",
  timerPlaceholder = { hour: "00", minute: "00" },
  activityLabel = "활동 내용",
  activityPlaceholder = "하늘보기",
  restLabel = "휴식 시간(분)",
  restPlaceholder = "5",
}) => {
  return (
    <Body>
      <Content>
        <TimerTitle>{timerTitle}</TimerTitle>
        <TimeInputContainer>
          <TimeInput type="number" placeholder={timerPlaceholder.hour} />
          <TimeSpan>시</TimeSpan>
          <TimeInput type="number" placeholder={timerPlaceholder.minute} />
          <TimeSpan>분</TimeSpan>
        </TimeInputContainer>
      </Content>
      <Field>
        <Label>{activityLabel}</Label>
        <TextInput type="text" placeholder={activityPlaceholder} />
      </Field>
      <Field>
        <Label>{restLabel}</Label>
        <TextInput type="number" placeholder={restPlaceholder} />
      </Field>
    </Body>
  );
};

const Body = styled.div`
  align-items: center;
  justify-content: center;
  flex: 0.8;
  display: flex;
  flex-direction: column;
  width: 85%;
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
  color: black;
`;

const Field = styled.div`
  display: flex;
  margin: 15px 0;
  width: 100%;
  gap: 10px;
  border-bottom: 1px solid #e1e4e5;
`;

const Label = styled.div`
  font-size: 18px;
`;

const TextInput = styled.input`
  width: 60%;
  font-size: 16px;
  border: none;
  background-color: #ffffff;
`;
