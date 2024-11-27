import styled from "styled-components";
import mainUnactive from "@assets/common/main-unactive.svg";
import mainActive from "@assets/common/main-active.svg";
import recordsUnactive from "@assets/common/records-unactive.svg";
import recordsActive from "@assets/common/records-active.svg";
import communityUnactive from "@assets/common/community-unactive.svg";
import communityActive from "@assets/common/community-active.svg";
import profileUnactive from "@assets/common/profile-unactive.svg";
import profileActive from "@assets/common/profile-active.svg";
import { Link, useLocation } from "react-router-dom";

export const TabNavigator = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Wrapper>
      <ul>
        <Link to="/main">
          <li>
            <img
              src={path.startsWith("/main") ? mainActive : mainUnactive}
              alt="main-nav-icon
          "
            />
            <strong
              style={{
                color: path.startsWith("/main") ? "#1b1b1b" : "#8B8B8B",
              }}
            >
              홈
            </strong>
          </li>
        </Link>
        <Link to="/records">
          <li>
            <img
              src={
                path.startsWith("/records") ? recordsActive : recordsUnactive
              }
              alt="records-nav-icon
            "
            />
            <strong
              style={{
                color: path.startsWith("/records") ? "#1b1b1b" : "#8B8B8B",
              }}
            >
              기록
            </strong>
          </li>
        </Link>
        <Link to="/community">
          <li>
            <img
              src={
                path.startsWith("/community")
                  ? communityActive
                  : communityUnactive
              }
              alt="records-nav-icon
          "
            />
            <strong
              style={{
                color: path.startsWith("/community") ? "#1b1b1b" : "#8B8B8B",
              }}
            >
              커뮤니티
            </strong>
          </li>
        </Link>
        <Link to="/profile">
          <li>
            <img
              src={
                path.startsWith("/profile") ? profileActive : profileUnactive
              }
              alt="profile-nav-icon
          "
            />
            <strong
              style={{
                color: path.startsWith("/profile") ? "#1b1b1b" : "#8B8B8B",
              }}
            >
              프로필
            </strong>
          </li>
        </Link>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: 375px;
  max-width: 400px;
  height: 78px;
  border-top: 1px solid #bebebe;

  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    height: 62px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 68px;
    height: 62px;
    gap: 8px;
    padding-top: 8px;
    cursor: pointer;
  }
`;
