import { Layout } from "@components/common/Layout";
import { TabNavigator } from "@components/common/TabNavigator";
import { CommunityPage } from "@pages/community/community";
import { LoginPage } from "@pages/login/login";
import { MainPage } from "@pages/main/main";
import { ProfilePage } from "@pages/profile/profile";
import { RecordsPage } from "@pages/records/records";
import { SignupPage } from "@pages/signup/signup";
import { ReviewPage } from "@pages/review/review";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
          {/* review page */}
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
        <TabNavigator />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
