import { useState, useEffect } from "react";
import "./profile.css";
import settingIcon from "@assets/profile/setting.svg";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "@apis/profile";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const goToSettings = () => navigate("/setting");

  const [userInfo, setUserInfo] = useState<string>("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // API URL 확인하기.
        const response = await getUserInfo();
        if (response) setUserInfo(response.data.result.name);
        console.log(userInfo);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>로딩 중...</p>;

  return (
    <div className="profile-page">
      <header className="header">
        <h2>프로필</h2>
        <span className="settings-icon">
          <img src={settingIcon} alt="Settings Icon" onClick={goToSettings} />
        </span>
      </header>

      <div className="profile-info">
        <div className="userimage"></div>
        <p className="userName">{userInfo}</p>
      </div>

      <div className="recipebox">
        <h3>
          나만의 <span className="highlight">해방</span> 레시피
        </h3>
        <ul>
          {/* {recipes.map((recipe) => (
            // API 에서 반환되는 데이터 구조가 동일한지 확인하기 -> recipe.id , recipe.name, recipe.icon
            <li key={recipe.id}>
              {recipe.name}
              <span>
                <img src={recipe.icon} alt="recipe Icon" />
              </span>
            </li>
          ))} */}
        </ul>
        <button className="add-recipe" onClick={() => navigate("/add-recipe")}>
          새로운 레시피 추가
        </button>
      </div>
    </div>
  );
};
