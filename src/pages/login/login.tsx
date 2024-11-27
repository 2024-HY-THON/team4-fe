import styled from "styled-components";

export const LoginPage = () => {
  return (
    <Container>
      <header>
        <h1>돌아온 당신을 환영합니다.</h1>
        <p>"하루 5분의 숨통. 당신만의 해방일지"</p>
      </header>

      <Form>
        <InputWrapper>
          <label htmlFor="id">아이디</label>
          <input id="id" type="text" placeholder="example@email.com" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="pw">비밀번호</label>
          <input id="pw" type="password" placeholder="password" />
        </InputWrapper>

        <SubmitButton type="submit">Sign In</SubmitButton>
      </Form>

      <SignUpButton>
        계정이 없으신가요?<button>회원가입</button>
      </SignUpButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 80px;

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 327px;
    height: 64px;
    margin-bottom: 60px;

    h1 {
      font-size: 24px;
      font-weight: 400;
      color: #0c1421;
    }

    p {
      font-size: 15px;
      font-weight: 400;
      color: #313957;
    }
  }
`;

const Form = styled.form`
  width: 327px;
  height: 220px;
  margin-bottom: 40px;
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
`;

const SignUpButton = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #313957;

  button {
    color: #1e4ae9;
    background-color: white;
    border: none;
  }
`;
