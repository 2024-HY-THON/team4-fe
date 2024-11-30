import { getDetailLog } from "@apis/calendar";
import { EventDetailType, EventType } from "@type/calendar";
import moment from "moment";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export const DailyLog = ({
  eventList,
  filterRef,
  date,
}: {
  date: Date;
  eventList: EventType[];
  filterRef: React.RefObject<HTMLDivElement>;
}) => {
  const restId = eventList[0].reposeId;
  const [data, setData] = useState<EventDetailType | null>(null);
  // const [date, setDate] = useState<string[]>([]);

  const fetchDetaillog = async () => {
    const response = await getDetailLog(restId);
    console.log(response?.data.result);
    setData(response?.data.result);

    console.log();

    // if (data) {
    //   const dateList = data.date.split("-");
    //   setDate(dateList);
    // }
  };

  useEffect(() => {
    fetchDetaillog();
  }, []);

  return (
    <>
      <Dim />
      <Container ref={filterRef}>
        <h2>
          <span className="date">{moment(date).format("MM월 DD일")}</span>의
          숨의 기록
        </h2>
        <Summary>
          <div className="detail-summary-container">
            <div className="detail-summary">
              <strong>숨 시간</strong>
              <span className="breath">{data?.reposeTotalMinutes}분</span>
            </div>
            <div className="detail-summary">
              <strong>만족도</strong>
              <span className="satisfaction">
                {data?.recipeSatisfaction ? "만족" : "불만족"}
              </span>
            </div>
            <div className="detail-summary">
              <strong>당일 기분</strong>
              <span className="mood">{data?.todayEmotion}</span>
            </div>
          </div>
        </Summary>

        <Log>
          <h3>당신의 하루는?</h3>
          <p>{data?.todayDefinition}</p>
        </Log>
      </Container>
    </>
  );
};

const Dim = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 375px;
  max-width: 400px;
  height: 600px;
  padding-top: 25px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 1;
  animation: ${fadeIn} 0.3s ease-out;

  h2 {
    margin-bottom: 50px;
    font-size: 20px;
    font-weight: 500;
    color: #1b1b1b;
  }

  .date {
    color: #049dbf;
    font-weight: 500;
  }
`;

const Summary = styled.div`
  width: 315px;
  height: 160px;
  padding: 14px 17px;
  border: 1px solid #80ddf2;
  border-radius: 12px;
  margin-bottom: 50px;

  .detail-summary-container {
    width: 281px;
    height: 22px;
  }

  .detail-summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #dfdfdf;
  }

  strong {
    width: 100px;
    font-size: 17px;
    font-weight: 400;
    text-align: left;
    color: #02457a;
  }

  span {
    font-size: 17px;
    font-weight: 400;
  }

  .breath,
  .mood {
    color: rgba(4, 135, 217, 0.5);
  }

  .satisfaction {
    color: rgba(126, 217, 87, 0.5);
  }
`;

const Log = styled.div`
  position: relative;
  width: 315px;
  height: 160px;
  padding: 13px 7px;
  border: 1px solid rgba(3, 120, 166, 0.2);
  border-radius: 12px;

  h3 {
    padding-left: 13px;
    font-size: 16px;
    font-weight: 400;
    color: #9c9090;
    text-align: left;
  }

  p {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    font-weight: 500;
    color: #049dbf;
  }
`;
