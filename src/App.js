import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginScreen } from "./components/LoginScreen.jsx";
import { LoginGoogle } from "./components/LoginGoogle";
import { PhoneNumberLogin } from "./components/PhoneNumberLogin";
import { LoginFacebook } from "./components/LoginFacebook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/google-account" element={<LoginGoogle />} />
        <Route path="/phone-number-log-in" element={<PhoneNumberLogin />} />
        <Route path="/facebook-account" element={<LoginFacebook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
