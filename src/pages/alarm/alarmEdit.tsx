import { useParams } from "react-router-dom";

export const AlarmEditPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>편집하기</h1>
      <p>선택한 아이템 ID: {id}</p>
    </div>
  );
};
