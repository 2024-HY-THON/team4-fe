import backpage from '@assets/profile/backpage.svg';
import './changeinfo.css'; // CSS 파일 가져오기

export const ChangeInfoPage = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={backpage} alt="Back to Profile" className="backpage-icon" />
        <h1 className="title">개인정보 변경</h1>
      </div>
      <div className="userimage"></div>
      <div className="infobox">
        <div>이름</div>
        <input type="text" placeholder="이름을 입력하세요"></input>
        <div>이메일</div>
        <input type="email" placeholder="Example@gmail.com"></input>
        <div>비밀번호</div>
        <input type="password" placeholder="********"></input>
        <div>생년월일</div>
        <input type="date"></input>
      </div>
    </div>
  );
};
