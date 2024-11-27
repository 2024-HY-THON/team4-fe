import styled, { keyframes } from "styled-components";
import prevArrow from "@assets/common/prev-arrow.svg";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@apis/signup";
import { useState } from "react";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    name: "김하냥",
    phoneNumber: "010-1234-5678",
  });
  const [inputValid, setInputValid] = useState<boolean>(false);
  const [showFailedAlert, setShowFailedAlert] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValue.email.length > 0 && inputValue.password.length > 0
      ? setInputValid(true)
      : setInputValid(false);

    const { id, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await registerUser(inputValue);
    console.log(response);

    // 회원가입 실패 예외처리
    if (!response || response.data.code === 400) {
      setShowFailedAlert(true);
      const timer = setTimeout(() => {
        setShowFailedAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }

    setShowFailedAlert(false);
    navigate("/login");
  };

  return (
    <Container>
      <PrevArrowIcon onClick={() => navigate("/login")}>
        <img src={prevArrow} alt="prev-arrow-icon" />
      </PrevArrowIcon>

      <header>
        <h1>잠시 쉬어볼까요?</h1>
        <p>당신만의 소소하지만 확실한 행복 찾기를 함께해요</p>
      </header>

      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="email">아이디</label>
          <input
            id="email"
            type="text"
            placeholder="아이디"
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper style={{ marginBottom: "40px" }}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
        </InputWrapper>

        <SubmitButton type="submit" disabled={!inputValid}>
          회원가입
        </SubmitButton>
      </Form>

      {/* 회원가입 실패 */}
      {showFailedAlert && (
        <SignupFailedAlert className="absolute top-1/3 flex justify-center items-center w-[344px] h-[64px] rounded-[8px] bg-black-70 text-[16px] font-medium text-white animate-fadeUpToDown">
          회원가입에 실패했습니다
        </SignupFailedAlert>
      )}
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
  background-color: ${(props) => (props.disabled ? "#9E9E9E" : "#049dbf")};
  border: none;
  cursor: pointer;
`;

const fadeUpToDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SignupFailedAlert = styled.div`
  position: absolute;
  top: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 344px;
  height: 64px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-weight: 500;
  color: white;
  animation: ${fadeUpToDown} 0.5s ease-in-out;
`;
