// import { axiosInstance } from "@apis/axiosInstance";
// import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const MainPage = () => {
  // const [timeList, setTimeList] = useState();
  const navigate = useNavigate();
  const testTimeList = [
    { time: '11 : 20', duration: '5분', label: '낮잠자기' },
    { time: '11 : 20', duration: '5분', label: '낮잠자기' },
    { time: '11 : 20', duration: '5분', label: '낮잠자기' },
    { time: '11 : 20', duration: '5분', label: '낮잠자기' },
    { time: '11 : 20', duration: '5분', label: '낮잠자기' },
    { time: '11 : 20', duration: '5분', label: '낮잠자기' },
  ];

  // useEffect(() => {
  //   const fetchTimeList = async () => {
  //     try {
  //       const response = await axiosInstance.get(`/sum/get-my-rest`);
  //       console.log("성공적으로 알람 리스트 가져옴:", response.data);
  //       setTimeList(response.data);
  //     } catch (error) {
  //       console.error("알람 리스트 가져오는 중 에러발생:", error);
  //     }
  //   };

  //   fetchTimeList();
  // }, []);

  return (
    <Container>
      {/* 시간 리스트 */}
      <TimeList>
        {testTimeList.map((item, index) => (
          <TimeRow key={index}>
            <TimeText>
              {item.time} ({item.duration})
            </TimeText>
            <button onClick={() => navigate(`/alarmEdit/${index}`)}>
              편집
            </button>
            <Label>{item.label}</Label>
          </TimeRow>
        ))}
      </TimeList>

      {/* 문구 섹션 */}
      <Banner>창가에서 보이는 하늘을 바라보는 게 어때요?</Banner>

      {/* 추가하기 버튼 */}
      <AddButton onClick={() => navigate('/alarmAdd')}>추가하기</AddButton>
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
  font-family: 'Arial', sans-serif;
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
`;

const TimeText = styled.span`
  font-size: 16px;
  color: #333;
`;

const Label = styled.span`
  font-size: 14px;
  color: #007bff;
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
