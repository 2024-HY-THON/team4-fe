import { axiosInstance } from "@apis/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const MainPage = () => {
  type toDoItem = {
    startTime: string;
    remainingMinutes: number;
    todo: string;
  };

  const [timeList, setTimeList] = useState<toDoItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimeList = async () => {
      try {
        const response = await axiosInstance.get(`/sum/get-my-rest`);
        console.log(
          "성공적으로 알람 리스트 가져옴:",
          response.data.result.reposeDTOs
        );
        const toDoData = response.data.result.reposeDTOs;
        setTimeList(toDoData);
      } catch (error) {
        console.error("알람 리스트 가져오는 중 에러발생:", error);
      }
    };

    fetchTimeList();
  }, []);

  return (
    <Container>
      {/* 시간 리스트 */}
      <TimeList>
        {timeList.map((item, index) => (
          <TimeRow key={index}>
            <TimeText>
              {`${item.startTime.split(":")[0]} : ${
                item.startTime.split(":")[1]
              }`}
              <span>({item.remainingMinutes}분)</span>
            </TimeText>

            <Label>{item.todo}</Label>
            <button onClick={() => navigate(`/alarmEdit/${index}`)}>
              편집
            </button>
          </TimeRow>
        ))}
      </TimeList>

      {/* 문구 섹션 */}
      <Banner>창가에서 보이는 하늘을 바라보는 게 어때요?</Banner>

      {/* 추가하기 버튼 */}
      <AddButton onClick={() => navigate("/alarmAdd")}>추가하기</AddButton>
    </Container>
  );
};

// Styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  padding-top: 80px;
`;

const TimeList = styled.div`
  width: 100%;

  border-top: 1px solid #ddd;
  margin-bottom: 40px;
`;

const TimeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;

  button {
    width: 34px;
    height: 24px;
    border: 1px solid #9bcff0;
    border-radius: 6px;
    background-color: #9bcff0;
    color: white;
    font-size: 10px;
    font-weight: 400;
    cursor: pointer;
  }
`;

const TimeText = styled.span`
  font-size: 16px;
  color: #333;

  span {
    margin-left: 40px;
    color: #8d8d8d;
    font-size: 15px;
    font-weight: 400;
  }
`;

const Label = styled.span`
  font-size: 14px;
  color: #0487d9;
  cursor: pointer;
`;

const Banner = styled.div`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  color: #555;
`;

const AddButton = styled.button`
  width: 90%;
  padding: 15px;
  background-color: #049dbf;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0487d9;
  }
`;
