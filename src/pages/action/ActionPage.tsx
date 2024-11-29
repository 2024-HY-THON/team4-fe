import ActionTimer from "@components/ActionPage/ActionTimer";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ActionPage() {
  const [searchParams] = useSearchParams();
  const [restId, setRestId] = useState<number>(0);
  const [toDo, setTodo] = useState<string>("");

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
  }, [restId, toDo]);

  return (
    <Layout>
      {!Number.isNaN(restId) && restId !== 0 && toDo !== "" ? (
        <ActionTimer restId={restId} toDo={toDo} />
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
`;
