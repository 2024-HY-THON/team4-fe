import styled from "styled-components";
import prevArrow from "@assets/common/prev-arrow.svg";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <PrevArrowIcon onClick={() => navigate("/login")}>
        <img src={prevArrow} alt="prev-arrow-icon" />
      </PrevArrowIcon>

      <header>
        <h1>잠시 쉬어볼까요?</h1>
        <p>당신만의 소소하지만 확실한 행복 찾기를 함께해요</p>
      </header>

      <Form>
        <InputWrapper>
          <label htmlFor="id">아이디</label>
          <input id="id" type="text" placeholder="아이디" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="pw">비밀번호</label>
          <input id="pw" type="password" placeholder="비밀번호" />
        </InputWrapper>

        <InputWrapper style={{ marginBottom: "34px" }}>
          <label htmlFor="pw-check">비밀번호 확인</label>
          <input id="pw-check" type="password" placeholder="비밀번호 확인" />
        </InputWrapper>

        <SubmitButton type="submit">회원가입</SubmitButton>
      </Form>
    </Container>
  );
};

const PrevArrowIcon = styled.button`
  position: absolute;
  top: 5%;
  left: 5%;
  cursor: pointer;
  background-color: white;
  border: none;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 100px;

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 327px;
    height: 64px;
    margin-bottom: 50px;

    h1 {
      font-size: 24px;
      font-weight: 400;
      color: #0c1421;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      color: #313957;
    }
  }
`;

const Form = styled.form`
  width: 327px;
  height: 220px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #0c1421;
  }

  input {
    width: 327px;
    height: 42px;
    border: 1px solid #d4d7e3;
    border-radius: 8px;
    padding-left: 14px;
    background-color: rgba(128, 221, 242, 0.2);
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #1d1d1d;
  }

  input::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: #8897ad;
  }
`;

const SubmitButton = styled.button`
  width: 327px;
  height: 44px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  background-color: #049dbf;
  border: none;
  cursor: pointer;
`;
