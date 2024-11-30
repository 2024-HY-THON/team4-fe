import { Layout } from "@components/common/Layout";
import { Splash } from "@components/common/Splash";

import { TabNavigator } from "@components/common/TabNavigator";
import { CommunityPage } from "@pages/community/community";
import { LoginPage } from "@pages/login/login";
import { MainPage } from "@pages/main/main";
import { ProfilePage } from "@pages/profile/profile";
import { RecordsPage } from "@pages/records/records";
import { SignupPage } from "@pages/signup/signup";
import { ReviewPage } from "@pages/review/review";
import { AlarmAddPage } from "@pages/alarm/alarmAdd";
import { AlarmEditPage } from "@pages/alarm/alarmEdit";
import { useTabBarStore } from "@store/tabBarStore";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useShallow } from "zustand/shallow";
// import { firebaseApp } from "./firebase.ts";
import { registerServiceWorker } from "@utils/registerServiceWorker";
import { SettingPage } from "@pages/profile/setting/setting";
import { ChangeInfoPage } from "@pages/profile/setting/changeinfo";

function App() {
  const { isTabBarVisible } = useTabBarStore(
    useShallow((state) => ({
      isTabBarVisible: state.isTabBarVisible,
    }))
  );
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(true);

  useEffect(() => {
    const checkFirstVisit = () => {
      const isFirstVisit = !sessionStorage.getItem("visited");

      if (isFirstVisit) {
        setTimeout(() => {
          setIsSplashVisible(false);
          sessionStorage.setItem("visited", "true");
        }, 2000);
      } else {
        setIsSplashVisible(false);
      }
    };

    checkFirstVisit();
  }, []);

  useEffect(() => {
    // 호출
    registerServiceWorker();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        {isSplashVisible ? (
          <Splash />
        ) : (
          <>
            <Routes>
              {/* 토큰 없으면 login으로 리다이렉트 */}
              <Route path="/" element={<Navigate to="/login" />} />

              {/* main page */}
              <Route path="/main" element={<MainPage />} />

              {/* login page */}
              <Route path="/login" element={<LoginPage />} />

              {/* signup page */}
              <Route path="/signup" element={<SignupPage />} />

              {/* records page */}
              <Route path="/records" element={<RecordsPage />} />

              {/* community page */}
              <Route path="/community" element={<CommunityPage />} />

              {/* profile page */}
              <Route path="/profile" element={<ProfilePage />} />

              {/* setting page */}
              <Route path="/setting" element={<SettingPage />} />

              {/* setting page */}
              <Route path="/changeinfo" element={<ChangeInfoPage />} />

              {/* review page */}
              <Route path="/review" element={<ReviewPage />} />

              {/* alarmAdd page */}
              <Route path="/alarmAdd" element={<AlarmAddPage />} />

              {/* alarmEditpage */}
              <Route path="/alarmEdit/:id" element={<AlarmEditPage />} />
            </Routes>
            {isTabBarVisible && <TabNavigator />}
          </>
        )}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
