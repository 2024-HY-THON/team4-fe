import { styled } from "styled-components";
import sumLogo from "@assets/main-page-icon-sum.svg";
import { useEffect, useState } from "react";
import { setStopRest } from "@apis/setRest";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

/**
 * 실제 실행 페이지의 타이머 컴포넌트
 * @returns
 */
export default function ActionTimer({
  restId,
  toDo,
  initSeconds,
}: {
  restId: number;
  toDo: string;
  initSeconds: number;
}) {
  // false시 타이머 비활성화 상태
  const [isRunTimer, setRunTimer] = useState<Boolean>(false);
  const clickedBtnFlag = useRef<Boolean>(false);
  const [seconds, setSeconds] = useState<number>(initSeconds); // 타이머 초
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined); // setInterval 참조 저장
  const navigate = useNavigate();

  const [isTimeOut, setTimeOutFlag] = useState<boolean>(false);
  const [min, setRestMin] = useState<string>("");
  const [sec, setRestSec] = useState<string>("");

  const onClickActionButton = () => {
    // 버튼 누름 여부 flag 1회만 실행
    if (!clickedBtnFlag.current) {
      clickedBtnFlag.current = true;
    }

    if (!isTimeOut) {
      setRunTimer(!isRunTimer);
      return;
    }
    setRunTimer(false);
  };

  useEffect(() => {
    if (isRunTimer) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 0) {
            clearInterval(timerRef.current); // 타이머 종료
            timerRef.current = undefined;
            setTimeOutFlag(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (clickedBtnFlag.current && timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = undefined;
        // 남은 시간 서버로 전송

        console.log(`타이머 중지 , 서버로 남은 시간 전송 : ${seconds}`);
        setStopRest(restId, { remainingSeconds: seconds })
          .then((res) => {
            console.log(res);
          })
          .catch((err: Error) => {
            console.error("남은 시간 전송하며 error 발생");
            console.error(err);
          });
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current); // 컴포넌트 언마운트 시 타이머 정리
      }
    };
  }, [isRunTimer, restId, initSeconds]);

  const formatTime = (seconds: number) => {
    const restMin = Math.floor(seconds / 60); // 전체 분
    const resSec = seconds % 60; // 남은 초
    return { restMin, resSec };
  };

  useEffect(() => {
    const { restMin, resSec } = formatTime(seconds);
    setRestMin(restMin.toString().padStart(2, "0"));
    setRestSec(resSec.toString().padStart(2, "0"));
  }, [seconds]);

  // NOTE review route 메인에서 연결할때만 쓰는지 확인 필요
  useEffect(() => {
    if (isTimeOut) {
      navigate(`/review?restId=${restId}`);
    }
  }, [isTimeOut]);

  return (
    <Layout>
      <TimerLayout>
        <ContentLayout>
          <SumTimer>
            <ol>숨 쉬는 중</ol>
            <ol>
              {min}:{sec}
            </ol>
          </SumTimer>

          {/* TODO sumLogo 추후에 고화질로 대체  */}
          <SumItem>
            <SumIconImg src={sumLogo}></SumIconImg>
          </SumItem>

          <SumItem>
            <SumTodo>"{toDo}"</SumTodo>
          </SumItem>
        </ContentLayout>
      </TimerLayout>

      <BtnLayout>
        <Button onClick={onClickActionButton}>
          {isRunTimer ? "중지" : "시작"}
        </Button>
      </BtnLayout>
    </Layout>
  );
}

const Layout = styled.div`
  height: 100%;
  padding: 20px;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
`;

const BtnLayout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  background-color: #0487d9;
  border-color: transparent;
  border-radius: 12px;
`;

const TimerLayout = styled.div`
  height: 70%;
  border-radius: 12px;
  background: linear-gradient(#02457a, #0487d9, #0491ce, #049dbf);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SumTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  color: #ffffff;
  padding: 40px;
`;

const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SumItem = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  flex: 1;
`;

const SumIconImg = styled.img`
  width: 150px;
  height: 201.43px;
  align-self: center;
  flex: 1;
`;

const SumTodo = styled.div`
  border-radius: 11px;
  color: #000000;
  background-color: rgb(255, 255, 255);
  opacity: 60%;
  border-color: #049dbf;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px;
`;
