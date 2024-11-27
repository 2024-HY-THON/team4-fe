import { useState } from "react";
import "./profile.css"; // CSS 파일을 import
import settingIcon from "@assets/profile/setting.svg";

export const ProfilePage = () => {
  const [userInfo] = useState({
    name: "남윤서",
    profileImage: "", // 유저 이미지
  });

  // 빌드 오류 주석처리
  // const [recipes, setRecipes] = useState(["산책하기", "음악듣기", "명상하기"]);

  return (
    <div className="profile-page">
      <header className="header">
        <h2>프로필</h2>
        <span>
          <img src={settingIcon} alt="Settings Icon" />
        </span>
      </header>

      <div className="profile-info">
        <div className="profile-picture">
          <img src={userInfo.profileImage} alt="Profile" />
        </div>
        <p>{userInfo.name}</p>
      </div>

      <div className="recipebox">
        <h3>나만의 해방 레시피</h3>
        <ul>
          <li>산책하기</li>
          <li>음악듣기</li>
          <li>명상하기</li>
        </ul>
        <button className="add-recipe">새로운 레시피 추가</button>
      </div>
    </div>
  );
};
