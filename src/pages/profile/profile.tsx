import { useState, useEffect } from 'react';
import './profile.css';
import settingIcon from '@assets/profile/setting.svg';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const goToSettings = () => navigate('/setting');

  const [userInfo, setUserInfo] = useState({ name: '', profileImage: '' });
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // API URL 확인하기.
        const userResponse = await fetch('https://api.example.com/user');
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        setUserInfo({
          name: userData.name,
          profileImage: userData.profileImage,
        });

        const recipeResponse = await fetch('https://api.example.com/recipes');
        if (!recipeResponse.ok) throw new Error('Failed to fetch recipes');
        const recipeData = await recipeResponse.json();
        setRecipes(recipeData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div className="profile-page">
      <header className="header">
        <h2>프로필</h2>
        <span className="settings-icon">
          <img src={settingIcon} alt="Settings Icon" onClick={goToSettings} />
        </span>
      </header>

      <div className="profile-info">
        <div
          className="userimage"
          style={{ backgroundImage: `url(${userInfo.profileImage})` }}
        ></div>
        <p className="userName">{userInfo.name}</p>
      </div>

      <div className="recipebox">
        <h3>
          나만의 <span className="highlight">해방</span> 레시피
        </h3>
        <ul>
          {recipes.map((recipe) => (
            // API 에서 반환되는 데이터 구조가 동일한지 확인하기 -> recipe.id , recipe.name, recipe.icon
            <li key={recipe.id}>
              {recipe.name}
              <span>
                <img src={recipe.icon} alt="recipe Icon" />
              </span>
            </li>
          ))}
        </ul>
        <button className="add-recipe" onClick={() => navigate('/add-recipe')}>
          새로운 레시피 추가
        </button>
      </div>
    </div>
  );
};
