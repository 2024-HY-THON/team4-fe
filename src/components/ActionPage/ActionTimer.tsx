import { styled } from "styled-components";

/**
 * 실제 실행 페이지의 타이머 컴포넌트
 * @returns
 */
export default function ActionTimer() {
  return (
    <Layout>
      <TimerLayout>
        <div>hi</div>
      </TimerLayout>
    </Layout>
  );
}

const Layout = styled.div`
  height: 100%;
`;

const TimerLayout = styled.div`
  /* min-width: 335px; */
  /* height: 80%; */
  margin: 20px;

  max-width: 100%;
  border-radius: 12px;

  background: linear-gradient(#02457a, #0487d9, #0491ce, #049dbf);
`;
