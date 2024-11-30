import ActionTimer from "@components/ActionPage/ActionTimer";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setStartRest, setStopRest } from "@apis/setRest";

export default function ActionPage() {
  const [searchParams] = useSearchParams();
  const [restId, setRestId] = useState<number>(0);
  const [toDo, setTodo] = useState<string>("");
  const [seconds, setSeconds] = useState<number | null>(null);

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

    const requestStartTimer = async () => {
      //NOTE 10초로 설정
      // NOTE 정지해야 시작이 가능함
      const stopResopnse = await setStopRest(restId, { remainingSeconds: 5 });
      console.log(stopResopnse);
      const responseData = await setStartRest(restId); // 타이머 시작 API 호출
      console.log("타이머 시작:", responseData);

      const { remainingMinutes, remainingSeconds } = responseData;
      const seconds = remainingMinutes * 60 + remainingSeconds;
      setSeconds(seconds);
    };

    if (restId !== 0) {
      requestStartTimer();
    }
  }, [restId, toDo]);

  return (
    <Layout>
      {restId !== 0 && toDo !== "" && !!seconds ? (
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
