import { Layout } from "@components/common/Layout";
import { LoginPage } from "@pages/login/login";
import { MainPage } from "@pages/main/main";
import { RecordsPage } from "@pages/records/records";
import { SignupPage } from "@pages/signup/signup";
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
