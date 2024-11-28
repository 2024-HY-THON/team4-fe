import React, { useState } from 'react';
import './profile.css'; // CSS 파일을 import
import settingIcon from '@assets/profile/setting.svg';
import recipe from '@assets/profile/recipe.svg';

export const ProfilePage = () => {
  const [userInfo] = useState({
    name: '남윤서',
    profileImage: '', // 유저 이미지
  });

  const [recipes, setRecipes] = useState(['산책하기', '음악듣기', '명상하기']);

  return (
    <div className="profile-page">
      <header className="header">
        <h2>프로필</h2>
        <span className="settings-icon">
          <img src={settingIcon} alt="Settings Icon" />
        </span>
      </header>

      {/* 사용자 이미지와 이름 구간 */}
      <div className="profile-info">
        <div className="profile-picture">
          <div className="userimage"></div>
        </div>
        <p className="userName">유저 이름</p>
      </div>

      <div className="recipebox">
        <h3>
          나만의 <span className="highlight">해방</span> 레시피
        </h3>
        <ul>
          <li>
            산책하기{' '}
            <span>
              <img src={recipe} alt="recipe Icon" />
            </span>
          </li>
          <li>
            음악듣기{' '}
            <span>
              <img src={recipe} alt="recipe Icon" />
            </span>
          </li>
          <li>
            명상하기{' '}
            <span>
              <img src={recipe} alt="recipe Icon" />
            </span>
          </li>
        </ul>
        <button className="add-recipe">새로운 레시피 추가</button>
      </div>
    </div>
  );
};
