import ActionTimer from "@components/ActionPage/ActionTimer";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setStartRest } from "@apis/setRest";

export default function ActionPage() {
  const [searchParams] = useSearchParams();
  const [restId, setRestId] = useState<number>(0);
  const [toDo, setTodo] = useState<string>("");
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const restIdFromParams = searchParams.get("restId");
    const toDoFromParams = searchParams.get("todo");

    if (restIdFromParams) {
      setRestId(Number(restIdFromParams)); // 문자열을 숫자로 변환 후 설정
    } else {
      console.error("restId가 유효하지 않습니다.");
    }

    if (toDoFromParams) {
      setTodo(toDoFromParams); // 'todo' 파라미터가 있으면 설정
    } else {
      setTodo("숨 쉬는 중"); // 기본값 설정
      console.error(
        `todo(text)가 ${toDoFromParams}으로 기본"숨 쉬는 중"으로 세팅합니다.`
      );
    }
  }, [searchParams]);

  useEffect(() => {
    console.log("restId:", restId);
    console.log("toDo:", toDo);

    const requestStartTimer = async () => {
      // TODO test 후 주석 풀 것
      // const response = await setStartRest(restId); // 타이머 시작 API 호출
      // console.log("타이머 시작:", response);

      // // isSuccess 실패시
      // if (!response?.data.isSuccess) {
      //   console.error(response?.data.message);
      //   return;
      // }

      // NOTE data 형식을 모르겠음 확인할것 임시로 해놓음

      const tmpMin = 1;
      const tmpSec = 1;

      const timerMin = tmpMin;
      const timerSec = tmpSec;

      // const seconds =
      //   Number(response.data.minutes) * 60 + Number(response.data.second);

      const seconds = timerMin * 60 + timerSec;
      setSeconds(seconds);
    };
    requestStartTimer();
  }, [restId, toDo]);

  return (
    <Layout>
      {!Number.isNaN(restId) && restId !== 0 && toDo !== "" ? (
        <ActionTimer restId={restId} toDo={toDo} initSeconds={seconds} />
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
`;
