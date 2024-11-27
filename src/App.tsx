import { Layout } from "@components/common/Layout";
import { Splash } from "@components/common/Splash";
import { TabNavigator } from "@components/common/TabNavigator";
import { CommunityPage } from "@pages/community/community";
import { LoginPage } from "@pages/login/login";
import { MainPage } from "@pages/main/main";
import { ProfilePage } from "@pages/profile/profile";
import { RecordsPage } from "@pages/records/records";
import { SignupPage } from "@pages/signup/signup";
import { useTabBarStore } from "@store/tabBarStore";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useShallow } from "zustand/shallow";

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

  return (
    <BrowserRouter>
      <Layout>
        {isSplashVisible ? (
          <Splash />
        ) : (
          <>
            <Routes>
              {/* main page */}
              <Route path="/" element={<MainPage />} />

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
            </Routes>
            {isTabBarVisible && <TabNavigator />}
          </>
        )}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
