import './setting.css'; // CSS 파일 가져오기
import backpage from '@assets/profile/backpage.svg';
import information from '@assets/profile/information.svg';
import notification from '@assets/profile/notification.svg';
import brightness from '@assets/profile/bright.svg';
import help from '@assets/profile/help.svg';
import policy from '@assets/profile/policy.svg';
import inquiry from '@assets/profile/inquiry.svg';
import logout from '@assets/profile/logout.svg';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트

export const SettingPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const goToProfile = () => {
    navigate('/profile'); // /profile 경로로 이동
  };

  const goToChangeInfo = () => {
    navigate('/changeinfo'); // /setting 경로로 이동
  };
  return (
    <div className="container">
      <div className="header">
        <img
          src={backpage}
          alt="Back to Profile"
          className="backpage-icon"
          onClick={goToProfile}
        />
        <h1 className="title">Settings</h1>
      </div>
      {/* 계정 섹션 */}
      <div className="section">
        <h2 className="section-title">계정</h2>
        <div className="box">
          <div className="item" onClick={goToChangeInfo}>
            <img src={information} alt="Settings Icon" />
            <p className="text">개인정보 변경</p>
          </div>
          <div className="item">
            <img src={notification} alt="Settings Icon" />
            <p className="text">알림</p>
          </div>
          <div className="item">
            <img src={brightness} alt="Settings Icon" />
            <p className="text">밝기</p>
          </div>
        </div>
      </div>
      {/* 지원 및 정보 섹션 */}
      <div className="section">
        <h2 className="section-title">지원 및 정보</h2>
        <div className="box">
          <div className="item">
            <img src={help} alt="Settings Icon" />
            <p className="text">도움말</p>
          </div>
          <div className="item">
            <img src={policy} alt="Settings Icon" />
            <p className="text">약관 및 정책</p>
          </div>
          <div className="item">
            <img src={inquiry} alt="Settings Icon" />
            <p className="text">문의</p>
          </div>
          <div className="item">
            <img src={logout} alt="Settings Icon" />
            <p className="text">로그아웃</p>
          </div>
        </div>
      </div>
    </div>
  );
};
