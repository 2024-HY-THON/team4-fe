import { styled } from "styled-components";
import sumLogo from "@assets/main-page-icon-sum.svg";

/**
 * 실제 실행 페이지의 타이머 컴포넌트
 * @returns
 */
export default function ActionTimer() {
  // TODO API로 추후에 대체
  const TMP_SUM_TODO = "창가 바라보기";
  const INIT_STATE_BTN = "시작";

  return (
    <Layout>
      <TimerLayout>
        <ContentLayout>
          <SumTimer>
            <ol>숨쉬는중</ol>
            {/* TODO 타이머 기능 구현해야함 */}
            <ol>00:00</ol>
          </SumTimer>
          {/* TODO sumLogo 추후에 고화질로 대체  */}

          <SumItem>
            <SumIconImg src={sumLogo}></SumIconImg>
          </SumItem>

          <SumItem>
            <SumTodo>"{TMP_SUM_TODO}"</SumTodo>
          </SumItem>
        </ContentLayout>
      </TimerLayout>

      <BtnLayout>
        <Button>{INIT_STATE_BTN}</Button>
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
