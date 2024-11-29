import { useState, useEffect } from 'react';
import './profile.css'; // CSS 파일을 import
import settingIcon from '@assets/profile/setting.svg'; // 설정 아이콘
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트

export const ProfilePage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const goToSettings = () => {
    navigate('/setting'); // /setting 경로로 이동
  };

  const [userInfo, setUserInfo] = useState({
    name: '',
    profileImage: '',
  });

  // 레시피 데이터를 저장할 state
  const [recipes, setRecipes] = useState<any[]>([]);

  // 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 사용자 정보 API 요청
        const userResponse = await fetch('url');
        const userData = await userResponse.json();
        setUserInfo({
          name: userData.name, // API에서 유저 이름 받아오기
          profileImage: userData.profileImage, // API에서 프로필 이미지 받아오기
        });

        // 레시피 정보 API 요청
        const recipeResponse = await fetch('url');
        const recipeData = await recipeResponse.json();
        setRecipes(recipeData); // 레시피 데이터 상태에 저장
      } catch (error) {
        console.error('데이터 요청 실패:', error);
      }
    };

    fetchData(); // API 호출
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행됨

  return (
    <div className="profile-page">
      <header className="header">
        <h2>프로필</h2>
        <span className="settings-icon">
          <img src={settingIcon} alt="Settings Icon" onClick={goToSettings} />
        </span>
      </header>

      {/* 사용자 이미지와 이름 구간 */}
      <div className="profile-info">
        <div className="profile-picture">
          {/* 유저 이미지 */}
          <div
            className="userimage"
            style={{ backgroundImage: `url(${userInfo.profileImage})` }}
          ></div>
        </div>
        <p className="userName">{userInfo.name}</p>
      </div>

      {/* 나만의 해방 레시피 섹션 */}
      <div className="recipebox">
        <h3>
          나만의 <span className="highlight">해방</span> 레시피
        </h3>
        <ul>
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <li key={index}>
                {recipe.name} {/* 레시피 이름 */}
                <span>
                  {/* 레시피 아이콘 (아이콘 URL이 있다면 사용) */}
                  <img src={recipe.icon} alt="recipe Icon" />
                </span>
              </li>
            ))
          ) : (
            <li>레시피가 없습니다.</li>
          )}
        </ul>
        <button className="add-recipe">새로운 레시피 추가</button>
      </div>
    </div>
  );
};
