import backpage from '@assets/profile/backpage.svg';
import logout from '@assets/profile/logout.svg';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import './changeinfo.css'; // CSS 파일 가져오기

export const ChangeInfoPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const goToSettings = () => {
    navigate('/setting'); // /setting 경로로 이동
  };
  const handleLogout = () => {
    // 클라이언트 측 인증 정보 제거
    localStorage.removeItem('token'); // 예: JWT 토큰
    sessionStorage.removeItem('user');

    // 추가적으로 서버에 로그아웃 요청
    fetch('/api/logout', {
      method: 'POST', // 서버가 로그아웃 API를 제공하는 경우
      credentials: 'include', // 쿠키 인증 정보를 함께 보내는 경우
    })
      .then(() => {
        alert('로그아웃 되었습니다!');
        window.location.href = '/login'; // 로그인 페이지로 리다이렉트
      })
      .catch((err) => {
        console.error('Logout error:', err);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <img
          src={backpage}
          alt="Back to Profile"
          className="backpage-icon"
          onClick={goToSettings}
        />
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
        <button className="save">저장하기</button>
      </div>
      <div className="logout" onClick={handleLogout}>
        <img src={logout} alt="logout"></img>
        Log out
      </div>
    </div>
  );
};
