import { Layout } from '@components/common/Layout';
import { TabNavigator } from '@components/common/TabNavigator';
import { CommunityPage } from '@pages/community/community';
import { LoginPage } from '@pages/login/login';
import { MainPage } from '@pages/main/main';
import { ProfilePage } from '@pages/profile/profile';
import { SettingPage } from '@pages/profile/setting/setting';
import { ChangeInfoPage } from '@pages/profile/setting/changeinfo';
import { NewRecipePage } from '@pages/profile/newrecipe/newrecipe';
import { RecordsPage } from '@pages/records/records';
import { SignupPage } from '@pages/signup/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
          {/* setting page */}
          <Route path="/setting" element={<SettingPage />} />

          {/* changeinfo page */}
          <Route path="/changeinfo" element={<ChangeInfoPage />} />

          {/* newrecipe page */}
          <Route path="/newrecipe" element={<NewRecipePage />} />
        </Routes>
        <TabNavigator />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
