import ButtonScreen from "./screens/ButtonScreen";
import LinksScreen from "./screens/LinksScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import StateScreen from "./screens/StateScreen";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppContext from "./context";

function App() {
  const [isLoginedUser, setIsLoginedUser] = useState(false);

  const [isDarkTheme, setisDarkTheme] = useState(false);

  return (
    <AppContext.Provider
      value={{ isLoginedUser, setIsLoginedUser, isDarkTheme, setisDarkTheme }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SigninScreen />} />
          <Route path="/dev/button" element={<ButtonScreen />} />
          <Route path="/dashboard/links" element={<LinksScreen />} />
          <Route path="/auth/signin" element={<SigninScreen />} />
          <Route path="/auth/signup" element={<SignupScreen />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
