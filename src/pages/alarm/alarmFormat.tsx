import { axiosInstance } from "@apis/axiosInstance";
import { useEffect, useState } from "react";
import styled from "styled-components";

type AlarmFormatProps = {
  timerTitle?: string;
  timerPlaceholder?: { hour: string; minute: string };
  activityLabel?: string;

  restLabel?: string;
  restPlaceholder?: string;
  onInputChange?: (key: string, value: string) => void; // 추가된 부분
};

export const AlarmFormat: React.FC<AlarmFormatProps> = ({
  timerTitle = "숨 쉴 시간",
  timerPlaceholder = { hour: "00", minute: "00" },
  activityLabel = "활동 내용",

  restLabel = "휴식 시간(분)",
  restPlaceholder = "5",
  onInputChange,
}) => {
  // const [recipes, setRecipes] = useState<string[]>([]);
  const [recipeLists, setRecipeList] = useState<
    Array<{ id: number; recipe: string }>
  >([]);

  useEffect(() => {
    const fetchTimeList = async () => {
      try {
        const response = await axiosInstance.get(`/sum/get-my-recipe`);
        const recipeList = response.data.result.recipes;
        setRecipeList(recipeList);
        // const recipeNames = recipeList.map(
        //   (item: { recipe: string }) => item.recipe
        // );
        // setRecipes(recipeNames);
      } catch (error) {
        console.error("알람 리스트 가져오는 중 에러발생:", error);
      }
    };

    fetchTimeList();
  }, []);
  return (
    <Body>
      <Content>
        <TimerTitle>{timerTitle}</TimerTitle>
        <TimeInputContainer>
          <TimeInput
            type="number"
            placeholder={timerPlaceholder.hour}
            onChange={(e) => onInputChange?.("hour", e.target.value)}
          />
          <TimeSpan>시</TimeSpan>
          <TimeInput
            type="number"
            placeholder={timerPlaceholder.minute}
            onChange={(e) => onInputChange?.("minute", e.target.value)}
          />
          <TimeSpan>분</TimeSpan>
        </TimeInputContainer>
      </Content>
      <Field>
        <Label>{activityLabel}</Label>
        {/* 드롭다운 추가 */}
        <SelectInput
          onChange={(e) => {
            const selectedId = e.target.value;
            onInputChange?.("activity", selectedId);
          }}
        >
          <option value="" disabled selected>
            선택하세요
          </option>

          {recipeLists.map((item, index) => (
            <option key={index} value={item.id}>
              {item.recipe}
            </option>
          ))}
        </SelectInput>
      </Field>
      <Field>
        <Label>{restLabel}</Label>
        <TextInput
          type="number"
          placeholder={restPlaceholder}
          onChange={(e) => onInputChange?.("rest", e.target.value)}
        />
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
const SelectInput = styled.select`
  width: 60%;
  font-size: 16px;
  border: 1px solid #e1e4e5;
  background-color: #ffffff;
  padding: 5px;
`;
const TextInput = styled.input`
  width: 60%;
  font-size: 16px;
  border: none;
  background-color: #ffffff;
`;
